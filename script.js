// CSC India Certificate Interactive Handlers

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('certCanvas');
  const ctx = canvas.getContext('2d');
  const certImg = document.getElementById('certImagePreview');

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
    certId: "CSCIndia-T4J8R6J3",
    issueDate: "01-07-2026"
  };

  // Prepare Canvas with full-resolution user image for PNG download
  function prepareCanvas() {
    const img = new Image();
    img.src = certImg ? certImg.src : 'Juvva Viswa Tej.jpeg';
    img.onload = () => {
      canvas.width = img.naturalWidth || 1200;
      canvas.height = img.naturalHeight || 850;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }

  prepareCanvas();

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
    link.download = `CSC_India_Certificate_Viswa_Tej_Juvva.jpeg`;
    link.href = certImg ? certImg.src : 'Juvva Viswa Tej.jpeg';
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
