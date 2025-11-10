// src/main.js
import './style.css'

const used = 500;
const total = 10000;
const percent = (used / total) * 100;

function handleVideoUpload(event) {
  const file = event.target.files[0];
  const videoPreviewContainer = document.getElementById('videoPreviewContainer');
  const videoPreview = document.getElementById('videoPreview');
  const analysisSections = document.getElementById('analysisSections');

  if (file) {
    // Create a temporary URL for the video
    const videoURL = URL.createObjectURL(file);
    videoPreview.src = videoURL;

    // Show the video preview
    videoPreviewContainer.classList.remove('hidden');
    videoPreviewContainer.classList.add('block');

    // Smoothly reveal the analysis sections
    analysisSections.classList.remove('hidden');
    analysisSections.classList.add('opacity-100');
  } else {
    // Hide if no file selected
    videoPreviewContainer.classList.add('hidden');
    analysisSections.classList.add('hidden');
  }
}

document.getElementById('quota-text').textContent = `${used} / ${total} requests`;
document.getElementById('quota-bar').style.width = percent + '%';

function showTab(tab) {
  document.getElementById('tsCode').classList.add('hidden');
  document.getElementById('curlCode').classList.add('hidden');
  document.getElementById('tsTab').classList.remove('text-blue-600','border-b-2','border-blue-600');
  document.getElementById('curlTab').classList.remove('text-blue-600','border-b-2','border-blue-600');

  if (tab === 'ts') {
    document.getElementById('tsCode').classList.remove('hidden');
    document.getElementById('tsTab').classList.add('text-blue-600','border-b-2','border-blue-600');
  } else {
    document.getElementById('curlCode').classList.remove('hidden');
    document.getElementById('curlTab').classList.add('text-blue-600','border-b-2','border-blue-600');
  }
}

// ✅ attach to window so HTML onclick can access it
window.showTab = showTab;

const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button')
  const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
      mobileMenu.classList.toggle('hidden')
      mobileMenu.classList.toggle('flex')
      hamburgerBtn.classList.toggle('toggle-btn')
  }

  hamburgerBtn.addEventListener('click', toggleMenu)
  mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)

// ✅ make it accessible to your HTML
window.handleVideoUpload = handleVideoUpload;