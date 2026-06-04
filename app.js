// Icon Mapping Dictionary
const iconsMap = {
  file: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  chart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
  users: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  eye: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
  book: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`,
  news: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 0 2 2z"></path><path d="M12 12H3"></path><path d="M16 6H3"></path><path d="M12 18H3"></path></svg>`
};

// Helper function to resolve SVG icon
function getIconSvg(iconName) {
  const name = String(iconName).toLowerCase().trim();
  return iconsMap[name] || iconsMap['file']; // fallback to document icon
}

// Default Hardcoded Applications Database (Offline Fallback)
const defaultApps = [
  {
    id: 'simpel2',
    name: 'SIMpel2',
    description: 'Sistem Internal Mandiri Penilaian dan Evaluasi Pelayanan',
    url: 'https://bagorsetdamuarojambi.blogspot.com/p/simpel2.html',
    category: 'aplikasi',
    status: 'stabil',
    launchMode: 'iframe',
    icon: iconsMap['file']
  },
  {
    id: 'simvel',
    name: 'SimVel',
    description: 'Sistem Internal Mandiri Evaluasi Kelembagaan',
    url: 'https://bagorsetdamuarojambi.blogspot.com/p/simvel-sistem-internal-mandiri-evaluasi.html',
    category: 'aplikasi',
    status: 'pengembangan',
    launchMode: 'iframe',
    icon: iconsMap['shield']
  },
  {
    id: 'simatang-pd',
    name: 'SIMatang-PD',
    description: 'Sistem Informasi Kematangan Perangkat Daerah',
    url: 'https://bagorsetdamuarojambi.blogspot.com/p/simatang-pd-sistem-informasi-kematangan.html',
    category: 'aplikasi',
    status: 'pengembangan',
    launchMode: 'iframe',
    icon: iconsMap['chart']
  },
  {
    id: 'sianjab',
    name: 'SiANJAB',
    description: 'Sistem Internal Mandiri Pengelolaan Anjab ABK',
    url: 'https://script.google.com/macros/s/AKfycbxvBfjFGEVGvlJBfCzabklB_vdE9C_u2KOuKWK3XBk0evQLAsrQzlScjJ7Pu6r2I1K5/exec',
    category: 'aplikasi',
    status: 'pengembangan',
    launchMode: 'iframe',
    icon: iconsMap['users']
  },
  {
    id: 'espt-online',
    name: 'E-SPT Online',
    description: 'Kirim Surat Perintah Tugas Secara Daring ke Bagian Organisasi',
    url: 'https://bagorsetdamuarojambi.blogspot.com/p/kirim-spt-ke-bagor.html',
    category: 'kepegawaian',
    status: 'stabil',
    launchMode: 'iframe',
    icon: iconsMap['mail']
  },
  {
    id: 'monitoring-spt',
    name: 'Monitoring SPT',
    description: 'Pantau status pengiriman surat secara real-time',
    url: 'https://script.google.com/macros/s/AKfycbxdewoyd5X9EwvQzqWNjwJHDyI6bPwF65oXV5mZEuBJ6e0kn4Cr9KbBvm41tS8IhD-7/exec',
    category: 'kepegawaian',
    status: 'admin',
    launchMode: 'iframe',
    icon: iconsMap['eye']
  },
  {
    id: 'rekon-tpp',
    name: 'Rekon TPP',
    description: 'Akses data rekonsiliasi TPP Kab. Muaro Jambi',
    url: 'https://docs.google.com/spreadsheets/d/1p2XOwIdNdkH7qtvNghfCpnviojWE2s1DUXN1sA1w25M/edit?usp=sharing',
    category: 'kepegawaian',
    status: 'stabil',
    launchMode: 'direct',
    icon: iconsMap['database']
  },
  {
    id: 'daftar-pd',
    name: 'Daftar PD',
    description: 'Daftar Kelembagaan Perangkat Daerah Muaro Jambi',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSDWcfo7o9BMP2hrqey-TtRVkSrduB0nie8tYmIbgl3_uPAljKsynOXCxeo23q6PH5BywdwgTRw99PG/pubhtml?gid=902116630&single=true',
    category: 'informasi',
    status: 'stabil',
    launchMode: 'iframe',
    icon: iconsMap['database']
  },
  {
    id: 'konversi-anjab',
    name: 'Konversi Anjab',
    description: 'Tool format SIASN Layanan Perencanaan',
    url: 'https://konversianjabkesiasn.streamlit.app/',
    category: 'informasi',
    status: 'stabil',
    launchMode: 'iframe',
    icon: iconsMap['chart']
  },
  {
    id: 'produk-hukum',
    name: 'Produk Hukum',
    description: 'Koleksi regulasi dan dokumen hukum terkait',
    url: 'https://www.scribd.com/user/423123452/Thomas-Anders',
    category: 'regulasi',
    status: 'stabil',
    launchMode: 'direct',
    icon: iconsMap['book']
  },
  {
    id: 'database-jf',
    name: 'Database Jabatan Fungsional',
    description: 'Kumpulan JF yang sudah mendapatkan Rekomendasi dari Instansi Pembina',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSf3_Gt-Dzfxx7tHcEE6VqGRSzTFfcY3HB98qLFxtr5LNWlP6vkH7aKm_m-pfwsYCTDoo1eR8a5xbFG/pubhtml',
    category: 'informasi',
    status: 'stabil',
    launchMode: 'iframe',
    icon: iconsMap['database']
  },
  {
    id: 'berita',
    name: 'Berita',
    description: 'Informasi Terbaru berhubungan dengan Bagian Organisasi',
    url: '#',
    category: 'informasi',
    status: 'pengembangan',
    launchMode: 'direct',
    icon: iconsMap['news']
  }
];

// Active Application Database state
let appsData = [];

// Configuration
const DEFAULT_SHEET_ID = '1Ag28OK0xukrtqyhXlda39xT2KYiNE4qC9FOIV1HnDow';

// DOM Elements
const appGrid = document.getElementById('appGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const filterTabs = document.querySelectorAll('.filter-tab');
const connectionStatus = document.getElementById('connectionStatus');

const viewerOverlay = document.getElementById('viewerOverlay');
const viewerIframe = document.getElementById('viewerIframe');
const viewerAppTitle = document.getElementById('viewerAppTitle');
const viewerAppBadge = document.getElementById('viewerAppBadge');
const iframeLoader = document.getElementById('iframeLoader');
const iframeFallback = document.getElementById('iframeFallback');
const fallbackExternalLink = document.getElementById('fallbackExternalLink');
const refreshViewerBtn = document.getElementById('refreshViewerBtn');
const toggleCropBtn = document.getElementById('toggleCropBtn');
const externalViewerLink = document.getElementById('externalViewerLink');
const closeViewerBtn = document.getElementById('closeViewerBtn');



// State Variables
let currentCategory = 'all';
let searchQuery = '';
let iframeTimeoutId = null;
let activeAppUrl = '';

// Load App Data from Storage or Fetch
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadData();
  fetchVisitorCount();
});

// Primary data fetch/load orchestration
function loadData() {
  fetchFromGoogleSheets(DEFAULT_SHEET_ID);
}

// Fetch and increment visitor counter using public CounterAPI
function fetchVisitorCount() {
  const countTodayElem = document.getElementById('countToday');
  const countMonthElem = document.getElementById('countMonth');
  const countTotalElem = document.getElementById('countTotal');
  
  if (!countTotalElem) return;
  
  // Namespace for the portal counter
  const namespace = 'portalbagor';
  
  // Format dates for the keys
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  
  const keyToday = `dash_${year}${month}${day}`;
  const keyMonth = `dash_${year}${month}`;
  const keyTotal = `dashboard_total`;
  
  const formatNum = (num) => new Intl.NumberFormat('id-ID').format(num);

  // Fetch all three concurrently
  Promise.all([
    fetch(`https://api.counterapi.dev/v1/${namespace}/${keyToday}/up`).then(res => res.json()),
    fetch(`https://api.counterapi.dev/v1/${namespace}/${keyMonth}/up`).then(res => res.json()),
    fetch(`https://api.counterapi.dev/v1/${namespace}/${keyTotal}/up`).then(res => res.json())
  ])
  .then(([dataToday, dataMonth, dataTotal]) => {
    if (countTodayElem) countTodayElem.textContent = dataToday && dataToday.count ? formatNum(dataToday.count) : '-';
    if (countMonthElem) countMonthElem.textContent = dataMonth && dataMonth.count ? formatNum(dataMonth.count) : '-';
    if (countTotalElem) countTotalElem.textContent = dataTotal && dataTotal.count ? formatNum(dataTotal.count) : '-';
  })
  .catch(err => {
    console.warn('Gagal memuat counter pengunjung:', err);
    if (countTodayElem) countTodayElem.textContent = '-';
    if (countMonthElem) countMonthElem.textContent = '-';
    if (countTotalElem) countTotalElem.textContent = '-';
  });
}

// Fetch from Google Visualization endpoint
function fetchFromGoogleSheets(sheetId) {
  setConnectionStatus('loading', 'Menghubungkan...');
  
  const gvizUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

  fetch(gvizUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Respons jaringan gagal');
      }
      return response.text();
    })
    .then(text => {
      // GViz wraps response in google.visualization.Query.setResponse( ... );
      const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S\w\W]*)\);/);
      if (!match) {
        throw new Error('Format respons Google Sheets tidak valid');
      }
      
      const json = JSON.parse(match[1]);
      if (json.status === 'error') {
        throw new Error(json.errors[0].detailed_message || 'Gagal mengambil data sheet');
      }

      const rows = json.table.rows;
      if (!rows || rows.length === 0) {
        throw new Error('Spreadsheet kosong');
      }

      // Map rows to App schema
      appsData = rows.map((row, idx) => {
        if (!row || !row.c) return null;
        
        const getCell = (colIdx) => {
          return row.c[colIdx] ? (row.c[colIdx].v !== null ? row.c[colIdx].v : '') : '';
        };

        return {
          id: String(getCell(0) || `app_${idx}`).trim(),
          name: String(getCell(1) || 'Tanpa Nama').trim(),
          description: String(getCell(2) || '').trim(),
          url: String(getCell(3) || '#').trim(),
          category: String(getCell(4) || 'informasi').toLowerCase().trim(),
          status: String(getCell(5) || 'stabil').toLowerCase().trim(),
          launchMode: String(getCell(6) || 'iframe').toLowerCase().trim(),
          icon: getIconSvg(getCell(7))
        };
      }).filter(app => app !== null);

      // Filter out sheet headers if users didn't set sheet range correctly
      if (appsData.length > 0 && (appsData[0].id.toLowerCase() === 'id' || appsData[0].name.toLowerCase() === 'nama')) {
        appsData.shift();
      }

      setConnectionStatus('active', 'Google Sheets');
      renderApps();
    })
    .catch(err => {
      console.warn('Gagal memuat dari Google Sheets. Menggunakan database lokal.', err);
      loadLocalDatabase();
      setConnectionStatus('offline', 'Sheets Gagal (Mode Lokal)');
    });
}

// Load default local lists
function loadLocalDatabase() {
  appsData = [...defaultApps];
  setConnectionStatus('offline', 'Lokal');
  renderApps();
}

// Update Header status indicators
function setConnectionStatus(type, label) {
  connectionStatus.className = 'status-pill';
  connectionStatus.textContent = label;
  
  if (type === 'loading') {
    connectionStatus.classList.add('status-loading');
  } else if (type === 'active') {
    connectionStatus.classList.add('status-active');
    connectionStatus.textContent = `Sheets: Terhubung`;
  } else {
    connectionStatus.classList.add('status-offline');
    connectionStatus.textContent = `Database: ${label}`;
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Search Box Inputs
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearSearchBtn.style.display = searchQuery.length > 0 ? 'flex' : 'none';
    renderApps();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearchBtn.style.display = 'none';
    searchInput.focus();
    renderApps();
  });

  // Filter Category Controls
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-category');
      renderApps();
    });
  });

  // Iframe View controllers
  viewerIframe.addEventListener('load', () => {
    if (iframeTimeoutId) {
      clearTimeout(iframeTimeoutId);
      iframeTimeoutId = null;
    }
    iframeLoader.style.opacity = '0';
    setTimeout(() => {
      iframeLoader.style.display = 'none';
    }, 300);
  });

  refreshViewerBtn.addEventListener('click', () => {
    if (activeAppUrl) {
      loadIframe(activeAppUrl);
    }
  });

  if (toggleCropBtn) {
    toggleCropBtn.addEventListener('click', () => {
      const viewerContent = document.querySelector('.viewer-content');
      if (viewerContent) {
        const isCurrentlyCropped = viewerContent.classList.contains('hide-google-banner');
        if (isCurrentlyCropped) {
          viewerContent.classList.remove('hide-google-banner');
          localStorage.setItem('disableGoogleBannerCrop', 'true');
          updateCropButtonState(false);
        } else {
          viewerContent.classList.add('hide-google-banner');
          localStorage.setItem('disableGoogleBannerCrop', 'false');
          updateCropButtonState(true);
        }
      }
    });
  }

  closeViewerBtn.addEventListener('click', closeViewer);

  // Close viewer with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (viewerOverlay.style.display === 'flex') {
        closeViewer();
      }
    }
  });


}

// Render dynamic elements
function renderApps() {
  appGrid.innerHTML = '';
  
  const filteredApps = appsData.filter(app => {
    const matchesCategory = currentCategory === 'all' || app.category === currentCategory;
    const matchesSearch = app.name.toLowerCase().includes(searchQuery) || 
                          app.description.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  if (filteredApps.length === 0) {
    appGrid.innerHTML = `
      <div class="loading-placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 12px;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <p>Tidak ada aplikasi atau layanan yang cocok dengan kriteria pencarian.</p>
      </div>
    `;
    return;
  }

  filteredApps.forEach(app => {
    const card = document.createElement('div');
    card.className = 'app-card';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    
    let badgeClass = 'badge-stable';
    let badgeText = 'Stabil';
    if (app.status === 'pengembangan') {
      badgeClass = 'badge-dev';
      badgeText = 'Pengembangan';
    } else if (app.status === 'admin') {
      badgeClass = 'badge-admin';
      badgeText = 'Admin';
    }

    const actionText = app.launchMode === 'iframe' ? 'Buka Layanan' : 'Buka Link';
    const actionIcon = app.launchMode === 'iframe' ? 
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>` : 
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;

    card.innerHTML = `
      <div class="app-card-top">
        <div class="app-card-meta">
          <div class="app-icon-wrapper">
            ${app.icon}
          </div>
          <span class="badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="app-info">
          <h3>${app.name}</h3>
          <p>${app.description}</p>
        </div>
      </div>
      <div class="app-card-bottom">
        <span class="app-category">${app.category}</span>
        <span class="action-indicator">
          <span>${actionText}</span>
          ${actionIcon}
        </span>
      </div>
    `;

    card.addEventListener('click', () => launchApp(app));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        launchApp(app);
      }
    });

    appGrid.appendChild(card);
  });
}

// App Launch Handler
function launchApp(app) {
  if (app.url === '#' || app.url === '') {
    alert(`Aplikasi "${app.name}" masih dalam tahap pengembangan dan belum dapat diakses.`);
    return;
  }

  // Detect mobile devices (phones and tablets)
  const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Google Apps Script inside iframe is heavily blocked by Chrome Android / Safari iOS third-party cookie security.
  // We automatically fallback to direct tab launch on mobile to ensure fast and reliable loading.
  if (app.launchMode === 'iframe' && !isMobileDevice) {
    openViewer(app);
  } else {
    window.open(app.url, '_blank', 'noopener,noreferrer');
  }
}

// Fullscreen Viewer state management
function openViewer(app) {
  document.body.style.overflow = 'hidden';
  
  viewerAppTitle.textContent = app.name;
  activeAppUrl = app.url;
  
  viewerAppBadge.textContent = app.status === 'pengembangan' ? 'Pengembangan' : (app.status === 'admin' ? 'Admin Only' : 'Stabil');
  viewerAppBadge.className = 'viewer-app-badge';
  if (app.status === 'pengembangan') {
    viewerAppBadge.classList.add('badge-dev');
  } else if (app.status === 'admin') {
    viewerAppBadge.classList.add('badge-admin');
  } else {
    viewerAppBadge.classList.add('badge-stable');
  }

  externalViewerLink.href = app.url;
  fallbackExternalLink.href = app.url;

  viewerOverlay.style.display = 'flex';
  loadIframe(app.url);
}

function loadIframe(url) {
  iframeLoader.style.display = 'flex';
  iframeLoader.style.opacity = '1';
  iframeFallback.style.display = 'none';
  viewerIframe.style.display = 'block';
  
  // Crop Google Apps Script warning header visually (top 37px)
  const isGoogleScript = url.includes('script.google.com');
  const viewerContent = document.querySelector('.viewer-content');
  if (viewerContent) {
    const disableCrop = localStorage.getItem('disableGoogleBannerCrop') === 'true';
    if (isGoogleScript && !disableCrop) {
      viewerContent.classList.add('hide-google-banner');
    } else {
      viewerContent.classList.remove('hide-google-banner');
    }
  }
  
  if (toggleCropBtn) {
    toggleCropBtn.style.display = isGoogleScript ? 'flex' : 'none';
    const isCropped = viewerContent && viewerContent.classList.contains('hide-google-banner');
    updateCropButtonState(isCropped);
  }
  
  viewerIframe.src = url;

  if (iframeTimeoutId) {
    clearTimeout(iframeTimeoutId);
  }

  // Safety loading timer (7 seconds)
  // If the page restricts embedding via headers, this will prompt the fallback notice
  iframeTimeoutId = setTimeout(() => {
    iframeLoader.style.opacity = '0';
    setTimeout(() => {
      iframeLoader.style.display = 'none';
    }, 300);
    
    iframeFallback.style.display = 'flex';
    viewerIframe.style.display = 'none';
  }, 7000);
}

function closeViewer() {
  document.body.style.overflow = 'auto';
  viewerOverlay.style.display = 'none';
  viewerIframe.src = 'about:blank';
  activeAppUrl = '';
  
  if (iframeTimeoutId) {
    clearTimeout(iframeTimeoutId);
    iframeTimeoutId = null;
  }
}

function updateCropButtonState(isCropped) {
  if (!toggleCropBtn) return;
  if (isCropped) {
    toggleCropBtn.classList.add('active');
    toggleCropBtn.title = "Tampilkan Banner Google (Gunakan jika bagian atas header terpotong)";
  } else {
    toggleCropBtn.classList.remove('active');
    toggleCropBtn.title = "Potong Tampilan Atas (Sembunyikan Banner Peringatan Google)";
  }
}


