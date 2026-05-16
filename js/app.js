
document.addEventListener('DOMContentLoaded', () => {
    // page
    const langSelect = document.getElementById('langSelect');
    let currentLang = localStorage.getItem('artoriumLang') || 'fr';
    // langue
    const translations = {
        fr: {
            navHome: "Accueil",
            navGallery: "Galerie",
            navContact: "Contact",
            heroTitle: "Bienvenue sur ARTORIUM",
            heroSubtitle: "Découvrez des milliers d'oeuvres d'art du Art Institute of Chicago. Explorez, recherchez et apprenez l'histoire derrière chaque chef-d'oeuvre.",
            btnExplore: "Explorer la Galerie",
            btnContact: "Nous Contacter",
            statArtworks: "Oeuvres",
            statLangs: "Langues",
            statApi: "Open API",
            featuresTitle: "Ce que nous offrons",
            feat1Title: "Collection Vaste",
            feat1Desc: "Accédez à plus de 100,000 oeuvres d'art avec images haute résolution et informations détaillées.",
            feat2Title: "Multilingue",
            feat2Desc: "Interface disponible en Français, Arabe et Anglais pour une accessibilité maximale.",
            feat3Title: "Recherche Avancée",
            feat3Desc: "Filtrez par type, artiste, date ou recherchez par mot-clé parmi toute la collection.",
            previewTitle: "Aperçu de la Collection",
            btnSeeAll: "Voir Toute la Collection",
            footerDesc: "Plateforme éducative développée par Moad Adriouche et Yassin Ahnine dans le cadre du module Développement Web - EST Guelmim.",
            poweredBy: "Propulsé par Art Institute of Chicago API",
            galleryTitle: "Galerie d'Art",
            gallerySubtitle: "Explorez les chefs-d'oeuvre du Art Institute of Chicago",
            searchPlaceholder: "Rechercher une oeuvre...",
            artworksAvailable: "oeuvres disponibles",
            filterAll: "Tout",
            filterPaintings: "Peintures",
            filterSculptures: "Sculptures",
            filterPhotos: "Photographies",
            loading: "Chargement des oeuvres...",
            previous: "Précédent",
            next: "Suivant",
            artist: "Artiste",
            date: "Date",
            origin: "Origine",
            type: "Type",
            description: "Description",
            viewOriginal: "Voir sur le site officiel",
            contactTitle: "Contactez-Nous",
            contactSubtitle: "Une question, une suggestion ? N'hésitez pas à nous écrire.",
            formName: "Nom Complet",
            formEmail: "Email",
            formSubject: "Sujet",
            phSubject: "Choisir un sujet",
            optBug: "Signaler un bug",
            optFeature: "Suggestion",
            optArtwork: "Info sur une oeuvre",
            optOther: "Autre",
            formMessage: "Message",
            phName: "Votre nom",
            phEmail: "votre@email.com",
            phMessage: "Votre message...",
            btnSend: "Envoyer le Message",
            successTitle: "Message Envoyé !",
            successText: "Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.",
            mapTitle: "Notre Localisation",
            addressLabel: "Adresse",
            emailLabel: "Email",
            phoneLabel: "Téléphone",
            devRole: "Développeur Web",
            devSchool: "EST Guelmim - Département Informatique",
            noResults: "Aucune oeuvre trouvée.",
            photographLimitReached: "Limite atteinte : 100 photographies affichées. Essayez un autre filtre pour découvrir d'autres styles.",
            moad:"Moad Adriouche",
            yassin:"Yassin Ahnin"

        },
        en: {
            navHome: "Home",
            navGallery: "Gallery",
            navContact: "Contact",
            heroTitle: "Welcome to ARTORIUM",
            heroSubtitle: "Discover thousands of artworks from the Art Institute of Chicago. Explore, search, and learn the story behind every masterpiece.",
            btnExplore: "Explore Gallery",
            btnContact: "Contact Us",
            statArtworks: "Artworks",
            statLangs: "Languages",
            statApi: "Open API",
            featuresTitle: "What We Offer",
            feat1Title: "Vast Collection",
            feat1Desc: "Access over 100,000 works of art with high-resolution images and detailed information.",
            feat2Title: "Multilingual",
            feat2Desc: "Interface available in French, Arabic, and English for maximum accessibility.",
            feat3Title: "Advanced Search",
            feat3Desc: "Filter by type, artist, date or search by keyword across the entire collection.",
            previewTitle: "Collection Preview",
            btnSeeAll: "See the Full Collection",
            footerDesc: "Educational platform developed by Moad Adriouche and Yassin Ahnine for the Web Development module - EST Guelmim.",
            poweredBy: "Powered by the Art Institute of Chicago API",
            galleryTitle: "Art Gallery",
            gallerySubtitle: "Explore masterpieces from the Art Institute of Chicago",
            searchPlaceholder: "Search artworks...",
            artworksAvailable: "artworks available",
            filterAll: "All",
            filterPaintings: "Paintings",
            filterSculptures: "Sculptures",
            filterPhotos: "Photographs",
            loading: "Loading artworks...",
            previous: "Previous",
            next: "Next",
            artist: "Artist",
            date: "Date",
            origin: "Origin",
            type: "Type",
            description: "Description",
            viewOriginal: "View on official site",
            contactTitle: "Contact Us",
            contactSubtitle: "Have a question or suggestion? Send us a message.",
            formName: "Full Name",
            formEmail: "Email",
            formSubject: "Subject",
            phSubject: "Choose a subject",
            optBug: "Report a bug",
            optFeature: "Suggestion",
            optArtwork: "Artwork info",
            optOther: "Other",
            formMessage: "Message",
            phName: "Your name",
            phEmail: "your@email.com",
            phMessage: "Your message...",
            btnSend: "Send Message",
            successTitle: "Message Sent!",
            successText: "Thank you for reaching out. We will reply as soon as possible.",
            mapTitle: "Our Location",
            addressLabel: "Address",
            emailLabel: "Email",
            phoneLabel: "Phone",
            devRole: "Web Developer",
            devSchool: "EST Guelmim - Computer Science Department",
            noResults: "No artworks found.",
            photographLimitReached: "Limit reached: 100 photographs displayed. Try another filter to explore different styles.",
            moad:"Moad Adriouche",
            yassin:"Yassin Ahnin"
        },
        ar: {
            navHome: "الرئيسية",
            navGallery: "المعرض",
            navContact: "اتصل بنا",
            heroTitle: "مرحباً بكم في ARTORIUM",
            heroSubtitle: "اكتشف آلاف الأعمال الفنية من معهد شيكاغو للفنون. استكشف، ابحث، وتعرف على التاريخ الكامن وراء كل تحفة فنية.",
            btnExplore: "استكشف المعرض",
            btnContact: "اتصل بنا",
            statArtworks: "أعمال فنية",
            statLangs: "لغات",
            statApi: "واجهة برمجة مفتوحة",
            featuresTitle: "ما نقدمه",
            feat1Title: "مجموعة واسعة",
            feat1Desc: "وصول إلى أكثر من 100,000 عمل فني مع صور عالية الدقة ومعلومات مفصلة.",
            feat2Title: "متعدد اللغات",
            feat2Desc: "واجهة متاحة باللغات الفرنسية، العربية والإنجليزية لتحقيق أقصى قدر من الوصول.",
            feat3Title: "بحث متقدم",
            feat3Desc: "تصفية حسب النوع، الفنان، التاريخ أو البحث بالكلمات المفتاحية عبر المجموعة كاملة.",
            previewTitle: "لمحة عن المجموعة",
            btnSeeAll: "مشاهدة المجموعة كاملة",
            footerDesc: "منصة تعليمية من تطوير معاد ادريوش و ياسين أحنين في إطار وحدة تطوير الويب - المدرسة العليا للتكنولوجيا بكلميم.",
            poweredBy: "مشغل بواسطة واجهة برمجة معهد شيكاغو للفنون",
            galleryTitle: "معرض الفنون",
            gallerySubtitle: "استكشف التحف الفنية لمعهد شيكاغو للفنون",
            searchPlaceholder: "البحث عن عمل فني...",
            artworksAvailable: "عمل فني متاح",
            filterAll: "الكل",
            filterPaintings: "لوحات",
            filterSculptures: "منحوتات",
            filterPhotos: "صور فوتوغرافية",
            loading: "جاري تحميل الأعمال الفنية...",
            previous: "السابق",
            next: "التالي",
            artist: "الفنان",
            date: "التاريخ",
            origin: "الأصل",
            type: "النوع",
            description: "الوصف",
            viewOriginal: "عرض على الموقع الرسمي",
            contactTitle: "اتصل بنا",
            contactSubtitle: "لديك سؤال أو اقتراح؟ لا تتردد في مراسلتنا.",
            formName: "الاسم الكامل",
            formEmail: "البريد الإلكتروني",
            formSubject: "الموضوع",
            phSubject: "اختر موضوعاً",
            optBug: "الإبلاغ عن خلل",
            optFeature: "اقتراح",
            optArtwork: "معلومات عن عمل فني",
            optOther: "أخرى",
            formMessage: "الرسالة",
            phName: "اسمك",
            phEmail: "votre@email.com",
            phMessage: "رسالتك...",
            btnSend: "إرسال الرسالة",
            successTitle: "تم إرسال الرسالة!",
            successText: "شكراً لتواصلك معنا. سنرد عليك في أقرب وقت ممكن.",
            mapTitle: "موقعنا",
            addressLabel: "العنوان",
            emailLabel: "البريد الإلكتروني",
            phoneLabel: "الهاتف",
            devRole: "مطور ويب",
            devSchool: "المدرسة العليا للتكنولوجيا بكلميم - قسم المعلوماتية",
            noResults: "لم يتم العثور على أي عمل فني.",
            photographLimitReached: "تم الوصول إلى الحد الأقصى: 100 صورة فوتوغرافية معروضة. جرّب مرشّحاً آخر لاستكشاف أسلوب مختلف.",
            moad: "معاد ادريوش",
            yassin:"ياسين أحنين"
        }
    };

    function updateLanguage(lang) {
        // langue
        currentLang = lang || 'fr';
        localStorage.setItem('artoriumLang', currentLang);
        const translationSet = translations[currentLang] || translations.en;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translationSet[key]) {
                el.textContent = translationSet[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translationSet[key]) {
                el.placeholder = translationSet[key];
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (translationSet[key]) {
                el.title = translationSet[key];
            }
        });
    }

    if (langSelect) {
        // restaurer
        const savedLang = localStorage.getItem('artoriumLang');
        const initialLang = savedLang || langSelect.value || 'fr';
        langSelect.value = initialLang;
        updateLanguage(initialLang);
        langSelect.addEventListener('change', () => updateLanguage(langSelect.value));
    }

    const previewGrid = document.getElementById('previewGrid');
    const galleryGrid = document.getElementById('galleryGrid');
    const contactForm = document.getElementById('contactForm');

    if (previewGrid) {
        // accueil
        fetch('https://api.artic.edu/api/v1/artworks?limit=4&fields=id,title,artist_display,image_id')
            .then(res => res.json())
            .then(data => {
                previewGrid.innerHTML = '';
                data.data.forEach(art => {
                    if (!art.image_id) return;
                    const card = document.createElement('div');
                    card.className = 'artwork-card';
                    card.innerHTML = `
                        <img src="https://www.artic.edu/iiif/2/${art.image_id}/full/400,/0/default.jpg" alt="${art.title}">
                        <div class="card-info">
                            <h3>${art.title}</h3>
                            <p>${art.artist_display}</p>
                        </div>
                    `;
                    previewGrid.appendChild(card);
                });
            })
            .catch(err => console.error('Erreur de chargement de l\'accueil :', err));
    }

    if (galleryGrid) {
        // galerie
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const artworkModal = document.getElementById('artworkModal');
        const loadingState = document.getElementById('loadingState');
        const pageInfo = document.getElementById('pageInfo');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const artworkCountDisplay = document.getElementById('artworkCount');

        let currentQuery = '';
        let currentFilter = 'all';
        let currentPage = 1;
        const limit = 18;
        const PHOTOGRAPH_LIMIT = 100;
        let photographItemsLoaded = 0;
        let totalArtworkCount = 0;
        // filtre
        const filterQueryMap = {
            all: '',
            Painting: 'painting',
            Sculpture: 'sculpture',
            Photograph: 'photograph'
        };
        const blacklistedIds = new Set([144356, 11136, 4492, 186545, 66394, 121125, 144819, 120746, 66489, 66275]);
        const blacklistedKeywords = [
            'nude', 'nudity', 'nudist', 'naked', 'explicit', 'erotic', 
            'pornograph', 'intimate', 'family', 'camp', 'bath', 'shower'
        ];

        // bloquer
        const isBlacklistedByContent = (item) => {
            const titleLower = (item.title || '').toLowerCase();
            const mediumLower = (item.medium_display || '').toLowerCase();
            const classificationLower = (item.classification_title || '').toLowerCase();
            const content = `${titleLower} ${mediumLower} ${classificationLower}`;
            
            return blacklistedKeywords.some(keyword => content.includes(keyword));
        };

        // chargement
        const setLoading = (show) => {
            if (loadingState) {
                loadingState.style.display = show ? 'flex' : 'none';
            }
            galleryGrid.style.display = show ? 'none' : 'grid';
        };

        const normalizeItem = (item) => ({
            id: item.id,
            title: item.title || 'Untitled',
            artist: item.artist_display || item.artist_title || 'Unknown artist',
            imageId: item.image_id,
            date: item.date_display || 'Unknown date',
            medium: item.medium_display || item.classification_title || 'Unknown medium',
            origin: item.place_of_origin || 'Unknown origin',
            type: item.classification_title || 'Unknown type',
            url: item.image_id ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg` : ''
        });

        const shuffleArray = (items) => {
            const copy = [...items];
            for (let i = copy.length - 1; i > 0; i -= 1) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        };

        const displayedArtworkIds = new Set();

        const renderGallery = (items) => {
            const itemsWithImages = items.filter(item => item.image_id);
            
            if (!itemsWithImages || !itemsWithImages.length) {
                galleryGrid.innerHTML = `<p class="empty-state">${translations[currentLang]?.noResults || translations.fr.noResults}</p>`;
                return;
            }

            galleryGrid.innerHTML = itemsWithImages.map(item => {
                const normalized = normalizeItem(item);
                return `
                    <div class="artwork-card" data-id="${normalized.id}">
                        <img src="${normalized.url}" alt="${normalized.title}" onerror="this.closest('.artwork-card').style.display='none'">
                        <div class="card-info">
                            <h3>${normalized.title}</h3>
                            <p>${normalized.artist}</p>
                        </div>
                    </div>
                `;
            }).join('');
        };

        const getGalleryUrl = (query, page) => {
            const filterQuery = filterQueryMap[currentFilter] || currentFilter;
            const searchTerm = [query, filterQuery].filter(Boolean).join(' ').trim();

            if (!searchTerm) {
                return `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}&fields=id,title,artist_display,image_id,date_display,medium_display,classification_title,place_of_origin,artist_title`;
            }
            return `https://api.artic.edu/api/v1/artworks/search?q=${encodeURIComponent(searchTerm)}&page=${page}&limit=${limit}&fields=id,title,artist_display,image_id,date_display,medium_display,classification_title,place_of_origin,artist_title`;
        };

        const applyFilter = (items) => {
            if (currentFilter === 'all') return items;
            const normalizedFilter = (filterQueryMap[currentFilter] || currentFilter).toLowerCase();
            return items.filter(item => {
                const normalized = `${item.classification_title || ''} ${item.medium_display || ''}`.toLowerCase();
                return normalized.includes(normalizedFilter);
            });
        };

        const loadGallery = async (query = '', page = 1) => {
            setLoading(true);
            try {
                const url = getGalleryUrl(query, page);
                const response = await fetch(url);
                const data = await response.json();
                let items = data.data || [];
                
                // total
                if (data.pagination && data.pagination.total) {
                    let paginationTotal = data.pagination.total;
                    // photo
                    if (currentFilter === 'Photograph') {
                        totalArtworkCount = Math.min(paginationTotal, PHOTOGRAPH_LIMIT);
                    } else {
                        totalArtworkCount = paginationTotal;
                    }
                } else {
                    // fallback
                    if (currentFilter === 'Photograph') {
                        totalArtworkCount = PHOTOGRAPH_LIMIT;
                    } else {
                        totalArtworkCount = items.length;
                    }
                }

                // photo
                if (currentFilter === 'Photograph' && photographItemsLoaded >= PHOTOGRAPH_LIMIT) {
                    const limitMessage = translations[currentLang]?.photographLimitReached || translations.en.photographLimitReached;
                    galleryGrid.innerHTML = `<p class="empty-state">${limitMessage}</p>`;
                    setLoading(false);
                    return;
                }

                if (currentFilter !== 'all' && !items.length && page === 1) {
                    const fallbackUrl = `https://api.artic.edu/api/v1/artworks?page=1&limit=${limit}&fields=id,title,artist_display,image_id,date_display,medium_display,classification_title,place_of_origin,artist_title`;
                    const fallbackResponse = await fetch(fallbackUrl);
                    const fallbackData = await fallbackResponse.json();
                    items = applyFilter(fallbackData.data || []);
                }

                const filtered = currentFilter === 'all' ? applyFilter(items) : items;
                const shuffled = shuffleArray(filtered);
                const uniqueItems = shuffled.filter(item => 
                    !displayedArtworkIds.has(item.id) && 
                    !blacklistedIds.has(item.id) && 
                    !isBlacklistedByContent(item) &&
                    item.image_id
                );
                let finalItems = uniqueItems.length ? uniqueItems : shuffled.filter(item => 
                    !blacklistedIds.has(item.id) && 
                    !isBlacklistedByContent(item) &&
                    item.image_id
                );

                // photo
                if (currentFilter === 'Photograph') {
                    const remainingPhotographs = PHOTOGRAPH_LIMIT - photographItemsLoaded;
                    finalItems = finalItems.slice(0, Math.min(limit, remainingPhotographs));
                    photographItemsLoaded += finalItems.length;
                }

                finalItems.slice(0, limit).forEach(item => displayedArtworkIds.add(item.id));
                renderGallery(finalItems.slice(0, limit));

                if (pageInfo) {
                    pageInfo.textContent = `Page ${page}`;
                }
            } catch (error) {
                console.error('Erreur de chargement de la galerie :', error);
                galleryGrid.innerHTML = '<p class="empty-state">Impossible de charger les oeuvres.</p>';
            } finally {
                setLoading(false);
            }
        };

        window.openModal = async (id) => {
            console.log('openModal appelé avec id :', id);
            const modalElement = document.getElementById('artworkModal');
            console.log('Élément modal trouvé :', modalElement);
            if (!modalElement) {
                console.error('Élément modal non trouvé !');
                return;
            }
            try {
                const response = await fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,artist_display,image_id,date_display,medium_display,place_of_origin,artist_title`);
                const data = await response.json();
                const item = data.data;
                if (!item) {
                    console.error('Aucune donnée d\'élément reçue');
                    return;
                }

                console.log('Données de l\'élément :', item);

                const img = modalElement.querySelector('#modalImg');
                const title = modalElement.querySelector('#modalTitle');
                const artist = modalElement.querySelector('#modalArtist');
                const date = modalElement.querySelector('#modalDate');
                const origin = modalElement.querySelector('#modalOrigin');
                const type = modalElement.querySelector('#modalType');
                const description = modalElement.querySelector('#modalDescription');
                const link = modalElement.querySelector('#modalLink');

                const imageUrl = item.image_id ? `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg` : '';
                if (img) {
                    img.src = imageUrl;
                    img.alt = item.title || 'Artwork';
                }
                if (title) title.textContent = item.title || 'Untitled';
                if (artist) artist.textContent = item.artist_display || item.artist_title || 'Unknown artist';
                if (date) date.textContent = item.date_display || 'Unknown date';
                if (origin) origin.textContent = item.place_of_origin || 'Unknown origin';
                if (type) type.textContent = item.medium_display || item.classification_title || 'Unknown type';

                if (description) {
                    const artistName = item.artist_display || item.artist_title || '';
                    const wikiDescription = await fetchWikipediaDescription(item.title, artistName);
                    if (wikiDescription) {
                        description.textContent = wikiDescription;
                    } else {
                        const details = [
                            item.artist_display,
                            item.medium_display,
                            item.classification_title
                        ].filter(Boolean).join(' • ');
                        description.textContent = details || 'No description found.';
                    }
                }

                if (link) {
                    link.href = `https://www.artic.edu/artworks/${id}`;
                }

                modalElement.classList.add('active');
                console.log('Le modal devrait maintenant être visible');
            } catch (error) {
                console.error('Erreur de chargement du modal :', error);
            }
        };

        const fetchWikipediaDescription = async (title, artist) => {
            try {
                // Recherche avec le titre et l'artiste
                const searchQuery = artist ? `${title} ${artist}`.trim() : title;
                const response = await fetch(
                    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchQuery)}`
                );
                
                // Si succès avec artiste + titre, retourner le résultat
                if (response.ok) {
                    const data = await response.json();
                    if (data.extract) {
                        return data.extract.split('.').slice(0, 2).join('. ') + '.';
                    }
                }
                
                // Recherche avec juste le titre si la recherche par artiste n'a pas fonctionné
                if (artist) {
                    const fallbackResponse = await fetch(
                        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
                    );
                    if (fallbackResponse.ok) {
                        const fallbackData = await fallbackResponse.json();
                        if (fallbackData.extract) {
                            return fallbackData.extract.split('.').slice(0, 2).join('. ') + '.';
                        }
                    }
                }
                
                return null;
            } catch (error) {
                console.error('Erreur de récupération Wikipedia :', error);
                return null;
            }
        };

        const closeModal = () => {
            const modalElement = document.getElementById('artworkModal');
            if (!modalElement) return;
            modalElement.classList.remove('active');
        };

        const modalCloseBtn = document.querySelector('#artworkModal .modal-close');
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeModal);
        }

        const modalElement = document.getElementById('artworkModal');
        if (modalElement) {
            modalElement.addEventListener('click', (event) => {
                if (event.target === modalElement) {
                    closeModal();
                }
            });
        }

        galleryGrid.addEventListener('click', (event) => {
            const card = event.target.closest('.artwork-card');
            if (!card || !galleryGrid.contains(card)) return;
            const artworkId = card.dataset.id;
            if (artworkId) {
                openModal(artworkId);
            }
        });

        if (searchInput) {
            searchInput.addEventListener('input', (event) => {
                currentQuery = event.target.value;
                currentPage = 1;
                displayedArtworkIds.clear();                totalArtworkCount = 0;                loadGallery(currentQuery, currentPage);
            });
        }

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentFilter = button.dataset.filter || 'all';
                currentPage = 1;
                displayedArtworkIds.clear();
                photographItemsLoaded = 0;
                totalArtworkCount = 0;
                loadGallery(currentQuery, currentPage);
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (currentPage <= 1) return;
                currentPage -= 1;
                loadGallery(currentQuery, currentPage);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentPage += 1;
                loadGallery(currentQuery, currentPage);
            });
        }

        loadGallery();
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.style.display = 'none';
            const successMessage = document.getElementById('formSuccess');
            if (successMessage) {
                successMessage.style.display = 'block';
            }
        });
    }
});