import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { CPANEL_EMAIL_PASSWORD } from '$env/static/private';

// cPanel email configuration
const CPANEL_CONFIG = {
    host: "mail.dynamictriune.com",
    port: 587,
    secure: false,
    auth: {
        user: "info@dynamictriune.com",
        pass: CPANEL_EMAIL_PASSWORD
    },
    tls: {
        // This bypasses the certificate hostname verification
        // Use this because the mail server uses a certificate for vivawebhost.com
        rejectUnauthorized: false
    }
};

const transporter = nodemailer.createTransport(CPANEL_CONFIG);

export async function POST({ request }) {
    try {
        const { name, email, role, message } = await request.json();

        // Send confirmation email to user
        await transporter.sendMail({
            from: '"Dynamic Triune" <info@dynamictriune.com>',
            to: email,
            subject: "Thank you for contacting Dynamic Triune",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #16a34a;">Thank you for reaching out!</h2>
                    <p>Dear ${name},</p>
                    <p>Thank you for your interest in Dynamic Triune. We have received your message and our team will review it shortly.</p>
                    <p>We aim to respond to all inquiries within 24-48 business hours.</p>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #666; font-size: 14px;">Best regards,<br>Dynamic Triune Team</p>
                </div>
            `
        });

        // Send notification to admin
        await transporter.sendMail({
            from: '"Contact Form" <info@dynamictriune.com>',
            to: "admin@dynamictriune.com", // Your admin email
            subject: "New Contact Form Submission",
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #16a34a;">New Contact Form Submission</h2>
                    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Role:</strong> ${role}</p>
                        <p><strong>Message:</strong></p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <hr style="border: 1px solid #eee; margin: 20px 0;">
                    <p style="color: #666; font-size: 14px;">This message was sent from the Dynamic Triune contact form.</p>
                </div>
            `
        });

        return json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return json(
            { success: false, error: 'Failed to send email' },
            { status: 500 }
        );
    }
}