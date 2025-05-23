import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export const maxDuration = 60; // Set maximum execution time to 60 seconds

export async function POST(request: Request) {
  try {
    const { html } = await request.json();

    if (!html) {
      return NextResponse.json(
        { success: false, message: "HTML content is required" },
        { status: 400 }
      );
    }

    // Launch a Puppeteer browser with optimized settings
    const browser = await puppeteer.launch({
      headless: true, // Use headless mode for better performance
      args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-sandbox",
      ],
    });

    try {
      const page = await browser.newPage();

      // Set viewport size for consistent rendering
      await page.setViewport({ width: 1024, height: 768 });

      // Set the content of the page with proper waiting
      await page.setContent(html, {
        waitUntil: "networkidle0",
        timeout: 30000, // 30 seconds timeout for page load
      });

      // Generate the PDF with improved settings
      const pdf = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: {
          top: "20mm",
          right: "20mm",
          bottom: "20mm",
          left: "20mm",
        },
        preferCSSPageSize: true,
      });

      // Return the PDF
      return new NextResponse(pdf, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition":
            'attachment; filename="conditions-generales-utilisation.pdf"',
          "Cache-Control": "no-store, max-age=0",
        },
      });
    } finally {
      // Ensure browser is closed even if errors occur during PDF generation
      await browser.close();
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate PDF",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
