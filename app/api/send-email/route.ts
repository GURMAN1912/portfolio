import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { email, message } = await request.json();

    if (!email || !message) {
        return NextResponse.json({ error: "Email and message are required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: "gurmansambhi1912@gmail.com",  // Replace with your email
        subject: `Message from ${email}`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
}
