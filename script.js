// CSC India Certificate Dynamic Renderer and Interactive Handlers

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('certCanvas');
  const ctx = canvas.getContext('2d');

  // Certificate Data for Viswa Tej Juvva
  const studentData = {
    name: "Viswa Tej Juvva",
    college: "Prasad V. Potluri Siddhartha Institute of Technology",
    affiliation: "JNTU Kakinada",
    rollNo: "23501A0556",
    program: "Data Science using Python",
    organization: "Council for Skills and Competencies (CSC India)",
    startDate: "04-05-2026",
    endDate: "27-06-2026",
    certId: "CSCIndia-T4J8A9B2",
    issueDate: "01-07-2026"
  };

  // Draw Official Certificate on Canvas
  function drawCertificate() {
    const w = canvas.width; // 1200
    const h = canvas.height; // 850

    // 1. Background
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, w, h);

    // 2. Outer Border Padding & Styling
    const padding = 24;
    ctx.strokeStyle = "#0D9488"; // Teal border
    ctx.lineWidth = 4;
    ctx.strokeRect(padding, padding, w - (padding * 2), h - (padding * 2));

    // Inner thin border
    ctx.strokeStyle = "#CBD5E1";
    ctx.lineWidth = 1;
    ctx.strokeRect(padding + 6, padding + 6, w - ((padding + 6) * 2), h - ((padding + 6) * 2));

    // Side Decorative Color Blocks (Left & Right pill-like borders)
    ctx.fillStyle = "#E0F2FE"; // Soft blue accent bar left
    ctx.fillRect(padding + 8, padding + 8, 12, h - ((padding + 8) * 2));

    ctx.fillStyle = "#0284C7"; // Cyan accent bar right
    ctx.fillRect(w - padding - 20, padding + 8, 12, h - ((padding + 8) * 2));

    // Bottom Decorative Bar
    ctx.fillStyle = "#0284C7";
    ctx.fillRect(padding + 8, h - padding - 20, w - ((padding + 8) * 2), 12);

    // 3. Top Header Logos & Symbols
    // Simulated State / AICTE Emblems on Left
    drawEmblemGroup(ctx, 80, 55);

    // Simulated CSC India & QR Code on Right
    drawCSCHeritageLogo(ctx, w - 240, 55);
    drawQRCode(ctx, w - 130, 55, 60);

    // 4. Header Titles
    ctx.textAlign = "center";

    // "ANDHRA PRADESH STATE COUNCIL OF HIGHER EDUCATION"
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 26px 'Inter', sans-serif";
    ctx.fillText("ANDHRA PRADESH STATE COUNCIL OF HIGHER EDUCATION", w / 2, 85);

    // Subtitle "(A Statutory Body of the Government of A.P)"
    ctx.fillStyle = "#DC2626"; // Crimson accent
    ctx.font = "bold 14px 'Inter', sans-serif";
    ctx.fillText("(A Statutory Body of the Government of A.P)", w / 2, 110);

    // 5. Green Title Pill Badge "CERTIFICATE OF COMPLETION"
    const badgeW = 420;
    const badgeH = 44;
    const badgeX = (w - badgeW) / 2;
    const badgeY = 135;

    ctx.fillStyle = "#16A34A"; // Vibrant Green
    roundRect(ctx, badgeX, badgeY, badgeW, badgeH, 22, true, false);

    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 20px 'Inter', sans-serif";
    ctx.fillText("CERTIFICATE OF COMPLETION", w / 2, badgeY + 29);

    // 6. Body Certification Text
    let currentY = 230;

    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("This is to certify that Mr./Ms.", w / 2 - 190, currentY);

    // Name (Bold Underlined)
    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 24px 'Inter', sans-serif";
    ctx.fillText(studentData.name, w / 2 + 100, currentY);

    // Underline name
    ctx.strokeStyle = "#64748B";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 30, currentY + 6);
    ctx.lineTo(w / 2 + 250, currentY + 6);
    ctx.stroke();

    currentY += 50;
    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("from", w / 2 - 380, currentY);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 20px 'Inter', sans-serif";
    ctx.fillText(studentData.college, w / 2 + 60, currentY);

    currentY += 45;
    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("affiliated with", w / 2 - 340, currentY);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 19px 'Inter', sans-serif";
    ctx.fillText(studentData.affiliation, w / 2 - 170, currentY);

    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("bearing roll number", w / 2 + 60, currentY);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 20px 'Inter', sans-serif";
    ctx.fillText(studentData.rollNo, w / 2 + 240, currentY);

    currentY += 50;
    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("has successfully completed the Internship Program in", w / 2 - 130, currentY);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 22px 'Inter', sans-serif";
    ctx.fillText(studentData.program, w / 2 + 210, currentY);

    currentY += 50;
    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("offered by", w / 2 - 380, currentY);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 19px 'Inter', sans-serif";
    ctx.fillText(studentData.organization, w / 2 + 20, currentY);

    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("Under APSCHE - Student", w / 2 + 370, currentY);

    currentY += 45;
    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("Internship Initiative during the period from", w / 2 - 160, currentY);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 19px 'Inter', sans-serif";
    ctx.fillText(studentData.startDate, w / 2 + 105, currentY);

    ctx.fillStyle = "#475569";
    ctx.font = "500 18px 'Inter', sans-serif";
    ctx.fillText("to", w / 2 + 185, currentY);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 19px 'Inter', sans-serif";
    ctx.fillText(studentData.endDate, w / 2 + 265, currentY);

    // 7. Watermark Ribbon Text across Center Bottom
    ctx.fillStyle = "rgba(148, 163, 184, 0.15)";
    ctx.font = "bold 22px 'Inter', sans-serif";
    ctx.fillText("NATION BUILDING THROUGH SKILLED YOUTH", w / 2, h - 220);

    // 8. Footer Info Left (Certificate ID & Issue Date)
    ctx.textAlign = "left";
    ctx.fillStyle = "#DC2626";
    ctx.font = "bold 15px 'Inter', sans-serif";
    ctx.fillText(`Certificate ID: ${studentData.certId}`, 80, h - 170);

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 15px 'Inter', sans-serif";
    ctx.fillText(`Date: ${studentData.issueDate}`, 80, h - 145);

    // 9. Footer Info Right (Signature & Stamp)
    drawSignatureAndStamp(ctx, w - 240, h - 190);

    // 10. Bottom Verification Link
    ctx.textAlign = "center";
    ctx.fillStyle = "#475569";
    ctx.font = "bold 13px 'Inter', sans-serif";
    ctx.fillText("Verify at https://verify.cscindia.org.in", w / 2, h - 50);
  }

  // Draw Helper: Emblem Group (Top Left)
  function drawEmblemGroup(ctx, x, y) {
    // APSCHE Circle Emblem
    ctx.beginPath();
    ctx.arc(x, y + 20, 22, 0, 2 * Math.PI);
    ctx.fillStyle = "#991B1B";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("APSCHE", x, y + 23);

    // AICTE Circle Emblem
    ctx.beginPath();
    ctx.arc(x + 55, y + 20, 22, 0, 2 * Math.PI);
    ctx.fillStyle = "#D97706";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 10px sans-serif";
    ctx.fillText("AICTE", x + 55, y + 23);

    // AP Govt Emblem
    ctx.beginPath();
    ctx.arc(x + 110, y + 20, 22, 0, 2 * Math.PI);
    ctx.fillStyle = "#047857";
    ctx.fill();
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 9px sans-serif";
    ctx.fillText("AP GOVT", x + 110, y + 23);
  }

  // Draw Helper: CSC India Logo (Top Right)
  function drawCSCHeritageLogo(ctx, x, y) {
    // 4 square logo grid
    const size = 16;
    ctx.fillStyle = "#F25022"; ctx.fillRect(x, y, size, size);
    ctx.fillStyle = "#7FBA00"; ctx.fillRect(x + size + 2, y, size, size);
    ctx.fillStyle = "#00A4EF"; ctx.fillRect(x, y + size + 2, size, size);
    ctx.fillStyle = "#FFB900"; ctx.fillRect(x + size + 2, y + size + 2, size, size);

    ctx.fillStyle = "#1E3A8A";
    ctx.font = "bold 13px 'Inter', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("Council for Skills", x + size * 2 + 10, y + 16);
    ctx.fillText("and Competencies", x + size * 2 + 10, y + 32);
  }

  // Draw Helper: QR Code Placeholder
  function drawQRCode(ctx, x, y, size) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, size, size);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x + 4, y + 4, size - 8, size - 8);

    ctx.fillStyle = "#000000";
    // QR outer boxes
    ctx.fillRect(x + 8, y + 8, 16, 16);
    ctx.fillRect(x + size - 24, y + 8, 16, 16);
    ctx.fillRect(x + 8, y + size - 24, 16, 16);

    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x + 12, y + 12, 8, 8);
    ctx.fillRect(x + size - 20, y + 12, 8, 8);
    ctx.fillRect(x + 12, y + size - 20, 8, 8);

    ctx.fillStyle = "#000000";
    ctx.fillRect(x + 14, y + 14, 4, 4);
    ctx.fillRect(x + size - 18, y + 14, 4, 4);
    ctx.fillRect(x + 14, y + size - 18, 4, 4);

    // Random QR data blocks
    ctx.fillRect(x + 30, y + 30, 8, 8);
    ctx.fillRect(x + 42, y + 26, 8, 8);
    ctx.fillRect(x + 28, y + 44, 12, 6);
  }

  // Draw Helper: Signature & Official Stamp Seal
  function drawSignatureAndStamp(ctx, x, y) {
    // Official Circular Stamp Seal
    ctx.beginPath();
    ctx.arc(x + 90, y + 20, 36, 0, 2 * Math.PI);
    ctx.strokeStyle = "#1E40AF";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(x + 90, y + 20, 32, 0, 2 * Math.PI);
    ctx.strokeStyle = "#1E40AF";
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = "#1E40AF";
    ctx.font = "bold 8px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("CSC INDIA", x + 90, y + 15);
    ctx.fillText("VERIFIED", x + 90, y + 26);

    // Cursive Signature rendering
    ctx.strokeStyle = "#0F172A";
    ctx.lineWidth = 2.2;
    ctx.beginPath();
    ctx.moveTo(x, y + 15);
    ctx.bezierCurveTo(x + 20, y - 10, x + 40, y + 25, x + 60, y + 5);
    ctx.bezierCurveTo(x + 70, y + 35, x + 90, y - 5, x + 110, y + 15);
    ctx.stroke();

    ctx.fillStyle = "#0F172A";
    ctx.font = "bold 14px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Shri. V. Sambasiva", x + 50, y + 42);

    ctx.fillStyle = "#64748B";
    ctx.font = "500 12px 'Inter', sans-serif";
    ctx.fillText("Associate Director", x + 50, y + 58);
  }

  // Rounded rectangle helper
  function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (fill) ctx.fill();
    if (stroke) ctx.stroke();
  }

  // Render initial certificate
  drawCertificate();

  // Copy Certificate ID functionality
  const copyBtn = document.getElementById('copyIdBtn');
  const certIdVal = document.getElementById('certIdValue').innerText;
  const toast = document.getElementById('toast');

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(certIdVal).then(() => {
      showToast('Certificate ID copied to clipboard!');
    }).catch(() => {
      showToast('Copied: ' + certIdVal);
    });
  });

  // Download PNG functionality
  const downloadBtn = document.getElementById('downloadBtn');
  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = `CSC_India_Certificate_Viswa_Tej_Juvva.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('Downloading certificate image...');
  });

  // Share button functionality
  const shareBtn = document.getElementById('shareBtn');
  shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'CSC India Certificate Verification',
        text: 'Certificate Verification for Viswa Tej Juvva (Roll No: 23501A0556)',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!');
      });
    }
  });

  // Toast Helper
  function showToast(msg) {
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  // Navigation Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', () => {
    showToast('CSC India Navigation Menu');
  });
});
