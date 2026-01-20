"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
    const t = useTranslations('contact.form');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            setStatus('success');
            // Reset form
            e.currentTarget.reset();
        } catch (error) {
            setStatus('error');
            setErrorMessage(t('errorMessage'));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="space-y-6">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('nameLabel')} *
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cinnabar focus:border-cinnabar transition-colors"
                        placeholder={t('namePlaceholder')}
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('emailLabel')} *
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cinnabar focus:border-cinnabar transition-colors"
                        placeholder={t('emailPlaceholder')}
                    />
                </div>

                {/* Subject */}
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('subjectLabel')} *
                    </label>
                    <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cinnabar focus:border-cinnabar transition-colors"
                    >
                        <option value="algemeen">{t('subjects.general')}</option>
                        <option value="intro">{t('subjects.intro')}</option>
                        <option value="lidmaatschap">{t('subjects.membership')}</option>
                        <option value="tarieven">{t('subjects.pricing')}</option>
                        <option value="anders">{t('subjects.other')}</option>
                    </select>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        {t('messageLabel')} *
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-cinnabar focus:border-cinnabar transition-colors resize-none"
                        placeholder={t('messagePlaceholder')}
                    />
                </div>

                {/* Verify Human (Simple Honeypot) - Optional improvement later */}

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full bg-cinnabar text-white font-bold py-3 px-6 rounded-md hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'submitting' ? t('sending') : t('submitButton')}
                    </button>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-md">
                        {t('successMessage')}
                    </div>
                )}

                {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-md">
                        {errorMessage || 'Er ging iets mis. Probeer het later opnieuw.'}
                    </div>
                )}
            </div>
        </form>
    );
}
