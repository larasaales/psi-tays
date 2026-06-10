import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json(
        { error: "Todos os campos (nome, e-mail, telefone e mensagem) são obrigatórios." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Formato de e-mail inválido." },
        { status: 400 }
      );
    }

    // Retrieve SMTP variables from environment
    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || "psilarasales@gmail.com";

    console.log(`[Formulário de Contato] Novo lead recebido de: ${nome} <${email}>`);

    if (host && user && pass) {
      // Configuration present: Create actual transporter and send email
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for 587 or others
        auth: {
          user,
          pass,
        },
      });

      const mailOptions = {
        from: `"${nome} - Formulário do Site" <${user}>`,
        to: receiver,
        replyTo: email,
        subject: `Novo Contato do Site: ${nome}`,
        text: `
Nome: ${nome}
E-mail: ${email}
Telefone/WhatsApp: ${telefone}

Mensagem:
${mensagem}
        `,
        html: `
          <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eaeaea; border-radius: 16px; background-color: #fcfcfb;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #6D4958; font-family: Georgia, serif; font-size: 24px; font-weight: normal; margin: 0; text-transform: uppercase; letter-spacing: 0.1em; border-bottom: 1px solid #f4ecef; padding-bottom: 20px;">Tays Sales</h1>
              <p style="color: #6F9288; font-size: 12px; text-transform: uppercase; letter-spacing: 0.15em; margin-top: 10px;">Novo Lead de Contato</p>
            </div>
            
            <p style="font-size: 16px; color: #555; line-height: 1.6; margin-bottom: 24px;">Você recebeu uma nova mensagem através do formulário de contato do seu site profissional.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr style="background-color: #F4ECEF;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6D4958; width: 30%; border-radius: 8px 0 0 8px;">Nome:</td>
                <td style="padding: 12px 16px; color: #333; border-radius: 0 8px 8px 0;">${nome}</td>
              </tr>
              <tr>
                <td style="padding: 12px 16px; font-weight: bold; color: #6D4958;">E-mail:</td>
                <td style="padding: 12px 16px; color: #333;"><a href="mailto:${email}" style="color: #6F9288; text-decoration: none;">${email}</a></td>
              </tr>
              <tr style="background-color: #F4ECEF;">
                <td style="padding: 12px 16px; font-weight: bold; color: #6D4958; border-radius: 8px 0 0 8px;">Telefone/WhatsApp:</td>
                <td style="padding: 12px 16px; color: #333; border-radius: 0 8px 8px 0;"><a href="https://wa.me/${telefone.replace(/\D/g, "")}" style="color: #6F9288; text-decoration: none;">${telefone}</a></td>
              </tr>
            </table>

            <div style="background-color: #ffffff; border: 1px solid #efefef; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
              <h4 style="color: #6D4958; margin-top: 0; margin-bottom: 12px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; border-bottom: 1px solid #f4ecef; padding-bottom: 8px;">Mensagem enviada:</h4>
              <p style="color: #4a4a4a; white-space: pre-wrap; line-height: 1.6; margin: 0; font-size: 15px;">${mensagem}</p>
            </div>
            
            <p style="font-size: 11px; color: #a1a1a1; text-align: center; margin-top: 40px; border-top: 1px solid #eee; padding-top: 20px; line-height: 1.5;">
              Este e-mail foi gerado automaticamente pelo formulário de contato do site profissional de Tays Sales.<br />
              Para responder a este lead, basta responder diretamente a este e-mail.
            </p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log(`[Formulário de Contato] E-mail enviado com sucesso via SMTP para ${receiver}`);
      return NextResponse.json({ success: true, message: "Sua mensagem foi enviada com sucesso! Tays Sales entrará em contato em breve." });
    } else {
      // Configuration absent: Log clearly. This prevents crash/error in preview or when not yet configured
      console.warn(
        `[Formulário de Contato] Credenciais SMTP não encontradas. Mockando envio. Adicione SMTP_HOST, SMTP_USER, SMTP_PASS, SMTP_PORT em .env.`
      );
      
      // Simulate real successful email behavior so the UI state turns beautiful and does not throw error.
      return NextResponse.json({
        success: true,
        mocked: true,
        message: "Sua mensagem foi enviada com sucesso! Tays Sales entrará em contato em breve. (Nota de desenvolvimento: Configure o SMTP no ambiente para entrega real)."
      });
    }
  } catch (error: any) {
    console.error("[Formulário de Contato] Erro crítico no envio de e-mail:", error);
    return NextResponse.json(
      { error: "Ocorreu um erro ao processar o formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp." },
      { status: 500 }
    );
  }
}
