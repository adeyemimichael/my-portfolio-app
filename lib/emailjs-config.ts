
export const emailjsConfig = {
  
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "NMjtbweOtdss-RG02",
  

  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_xu0dpei",
  

  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_w4o89pn",
};

// Email template variables that will be sent to your email template
export interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  subject: string;
  message: string;
  to_name: string; // Your name
  to_email: string; // Your email
}