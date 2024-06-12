import nodemailer from "nodemailer";

export default async function  (email, subject, text, user) {
	const params = {
		host: process.env.HOST,
		service: process.env.SERVICE,
		port: Number(process.env.EMAIL_PORT),
		secure: Boolean(process.env.SECURE),
		auth: {
			user: user,
			pass: process.env.PASS,
		},
	}
	const transporter = nodemailer.createTransport(params);

	await transporter.sendMail({
		from: process.env.USER,
		to: email,
		subject: subject,
		text: text,
	});
};