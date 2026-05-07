import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Calendar, Upload, FileText, Send, CheckCircle2, X } from "lucide-react";
import { assignments } from "../data/mockData";
import { useState, useRef } from "react";

export function Assignment() {
  const { assignmentId } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const assignment = assignments.find(a => a.id === assignmentId);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('Ukuran file maksimal 10MB');
        return;
      }
      setUploadedFile(file);
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    if (uploadedFile) {
      setShowSuccessPopup(true);
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
    }
  };

  if (!assignment) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Assignment not found</p>
      </div>
    );
  }

  const dueDate = new Date(assignment.dueDate);
  const formattedDate = dueDate.toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="pb-20">
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl relative animate-fade-in">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">SUKSES!</h3>
              <p className="text-gray-700">Tugas Anda telah dikirim</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-primary text-white px-4 pt-6 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 mb-4 text-white hover:opacity-80"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Kembali</span>
        </button>
        
        <h1 className="mb-1 text-white line-clamp-2">{assignment.title}</h1>
        <p className="text-white/90 text-sm">{assignment.courseName}</p>
      </div>

      {/* Due Date Section */}
      <div className="px-4 -mt-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="bg-primary/10 p-3 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Deadline</p>
              <p className="font-medium text-gray-900">{formattedDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Assignment Description */}
      <div className="px-4 mt-6">
        <h3 className="mb-3">Deskripsi Tugas</h3>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {assignment.description}
          </p>
        </div>
      </div>

      {/* Submission Section */}
      {assignment.status === 'pending' && (
        <div className="px-4 mt-6">
          <h3 className="mb-3">Pengumpulan Tugas</h3>
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.zip"
              onChange={handleFileSelect}
              className="hidden"
            />

            {!uploadedFile ? (
              <div
                onClick={handleUploadAreaClick}
                className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="font-medium text-gray-900 mb-1">Upload File</p>
                <p className="text-sm text-gray-500">
                  Klik untuk memilih file atau drag & drop
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  PDF, DOC, DOCX, ZIP (Max. 10MB)
                </p>
              </div>
            ) : (
              <div className="border-2 border-green-500 bg-green-50 rounded-xl p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <p className="font-medium text-green-700 mb-1">Terkirim dan Siap Dinilai</p>
                <p className="text-sm text-gray-600">
                  {uploadedFile.name}
                </p>
                <button
                  onClick={handleUploadAreaClick}
                  className="text-sm text-primary hover:underline mt-2"
                >
                  Ganti file
                </button>
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={!uploadedFile}
              className={`w-full mt-4 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 ${
                uploadedFile
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <Send className="w-5 h-5" />
              Kumpulkan Tugas
            </button>
          </div>
        </div>
      )}

      {/* Submitted Status */}
      {assignment.status === 'submitted' && (
        <div className="px-4 mt-6">
          <h3 className="mb-3">Status Pengumpulan</h3>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="bg-green-500 p-2 rounded-lg">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-green-900 mb-1">Tugas Sudah Dikumpulkan</p>
                <p className="text-sm text-green-700 mb-3">
                  File: assignment_submission.pdf
                </p>
                <p className="text-xs text-green-600">
                  Dikumpulkan pada: 1 April 2026, 14:30
                </p>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-white text-primary border border-primary py-2.5 rounded-xl hover:bg-primary/5 transition-colors">
              Kirim Ulang
            </button>
          </div>
        </div>
      )}

      {/* Comments Section */}
      <div className="px-4 mt-6">
        <h3 className="mb-3">Komentar</h3>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <textarea
            placeholder="Tulis komentar atau pertanyaan..."
            className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            rows={4}
          />
          <button className="mt-3 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
            Kirim Komentar
          </button>
        </div>
      </div>
    </div>
  );
}
