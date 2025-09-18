'use client';

import { useState } from 'react';
import { supabase, FundingApplication } from '@/lib/supabase';

interface FundingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageType: string;
  price: string;
}

export default function FundingModal({ isOpen, onClose, packageType, price }: FundingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Check if Supabase is properly configured
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      
      if (!supabaseUrl || supabaseUrl === 'https://example.supabase.co' || 
          !supabaseKey || supabaseKey === 'example-key') {
        // Mock successful submission for demo
        console.warn('Supabase not configured, simulating successful submission');
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
        
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: ''
        });
        
        // Auto-close after success
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
        
        return;
      }

      const applicationData: Omit<FundingApplication, 'id' | 'created_at'> = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        package_type: packageType,
        price: price,
        message: formData.message.trim() || undefined,
        language: 'ko'
      };

      const { error: submitError } = await supabase
        .from('funding_applications')
        .insert([applicationData]);

      if (submitError) {
        throw submitError;
      }

      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
      });
      
      // Auto-close after success
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);

    } catch (err) {
      console.error('Submission error:', err);
      setError(err instanceof Error ? err.message : '제출 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          {isSuccess ? (
            <div className="text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-light text-gray-900 mb-4">
                후원 신청 완료!
              </h3>
              <p className="text-gray-600 mb-6">
                소중한 후원에 감사드립니다. 곧 연락드리겠습니다.
              </p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-2">
                    후원 신청
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {packageType} - {price}
                  </p>
                  <p className="text-xs text-gray-500">
                    * 실제 결제가 아닌 후원 의사 신청서입니다
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                  disabled={isSubmitting}
                >
                  ×
                </button>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    disabled={isSubmitting}
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    전화번호 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    주소 *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    placeholder="배송받을 주소를 입력해주세요"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-700 mb-2">
                    메시지 (선택사항)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="추가로 전달하고 싶은 메시지가 있다면 작성해주세요"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.address}
                    className="flex-1 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? '제출 중...' : '후원 신청'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}