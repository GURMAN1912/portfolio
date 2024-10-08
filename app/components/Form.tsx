"use client";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const data = await response.json();
            console.log(data);
            setStatus("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                message: "",
            });
            
        } catch (error) {
            console.error("Error sending email:", error);
            setStatus("Error sending email. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-black p-6 rounded-xl shadow-xl">
            <h1 className="text-3xl font-semibold text-center text-accent">
                Contact Me
            </h1>
            <form className="flex flex-col gap-6 text-background" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-white mb-1">Your Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-lg bg-background text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="text-white mb-1">Your Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-lg bg-background text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="text-white mb-1">Your Message</label>
                    <textarea
                        id="message"
                        placeholder="Type your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="p-3 border border-gray-300 rounded-lg bg-background text-white  transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                        required
                        rows={4}
                    />
                </div>
                <button
                    type="submit"
                    className={`bg-accent hover:bg-accent/60 text-white py-3 px-6 rounded-lg transition duration-200 ${
                        isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send"}
                </button>
            </form>
            {status && <p className="mt-4 text-center text-gray-300">{status}</p>}
        </div>
    );
}
