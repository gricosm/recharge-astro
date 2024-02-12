import { sendEmail } from "@utils/nodemailer"; // Asegúrate de que la ruta sea correcta
import type { APIContext } from "astro";
import { z } from "zod";

// Definir el esquema de validación con Zod
const ContactFormSchema = z.object({
  username: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(1000),
});

export async function post({ request }: APIContext) {
  try {
    const formData = await request.formData();
    const result = ContactFormSchema.safeParse({
      username: formData.get("username")?.toString(),
      email: formData.get("email")?.toString(),
      message: formData.get("message")?.toString(),
    });

    if (!result.success) {
      // La validación falló
      throw new Error(
        "Validación fallida: " + JSON.stringify(result.error.format())
      );
    }

    // Datos validados
    const { username, email, message } = result.data;

    // Construir el HTML del mensaje
    const htmlMessage = `
      <h1>Nuevo mensaje de ${username} (${email})</h1>
      <p>${message}</p>
    `;

    // Utilizar sendEmail para enviar el correo
    await sendEmail({
      email: "pepito@test.com", // Destinatario del correo
      subject: `${username} (${email}) Se ha puesto en contacto`, // Asunto del correo
      text: `Mensaje de ${username} (${email}): ${message}`, // Versión de texto plano del mensaje
      html: htmlMessage, // Versión HTML del mensaje
    });

    // Respuesta de éxito
    return new Response(
      JSON.stringify({ message: "Email enviado con éxito" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // Manejo de errores
    console.error("Error al enviar el email:", error);
    return new Response(JSON.stringify({ message: "Error al enviar email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
