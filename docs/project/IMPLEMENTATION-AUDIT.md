# InterFlower Uygulama Denetimi

Bu belge, mevcut Duyvenvoorde klonunun InterFlower V1'e dönüştürülmesi için teknik başlangıç durumunu, component eşlemesini, bilinen kalite sorunlarını ve bağlayıcı uygulama kararlarını kaydeder.

## 1. Mevcut teknik yapı

### Framework, dil ve styling

- Uygulama Next.js `16.2.1`, React `19.2.4` ve React DOM `19.2.4` kullanıyor.
- Kod tabanı TypeScript 5 ile yazılmış. `strict`, `noEmit`, `isolatedModules` ve bundler tabanlı module resolution etkin.
- Proje App Router kullanıyor; uygulama girişi `src/app/layout.tsx`, ana sayfa ise `src/app/page.tsx`.
- Styling Tailwind CSS v4, `@tailwindcss/postcss`, global CSS design token'ları ve utility class'ları üzerinden yürütülüyor. `shadcn` altyapısı, `cn()` yardımcı fonksiyonu, `class-variance-authority`, `clsx` ve `tailwind-merge` bağımlılıkları mevcut.
- Fontlar `next/font/local` ile `public/fonts` altından yükleniyor. Mevcut font değişkenleri ve marka token'ları Duyvenvoorde'a özel.
- Görsellerde `next/image`, videolarda yerel MP4 dosyaları kullanılıyor.

### Animasyon yaklaşımı

- Yeni veya bağımsız bir runtime animasyon kütüphanesi yok.
- Genel içerik girişleri `Reveal` componenti, `IntersectionObserver` ve CSS transition'ları ile yapılıyor.
- IntroSlider marquee animasyonu Web Animations API ile çalışıyor.
- WebshopSection, `requestAnimationFrame`, scroll/resize event'leri, React state ve Tailwind transform class'ları ile kademeli parallax/rotation uyguluyor.
- Hover geçişleri ve ikon değişimleri CSS transition/transform ile çözülüyor.
- `prefers-reduced-motion` için global reveal ve iki özel animasyon akışında temel destek bulunuyor.
- `tw-animate-css` global olarak içe aktarılmış olsa da ana sayfanın özel hareketleri ağırlıklı olarak native browser API'leri ve CSS ile uygulanmış.

### Mevcut scriptler

| Script | Komut | Görev |
| --- | --- | --- |
| `dev` | `next dev` | Geliştirme sunucusunu başlatır. |
| `build` | `next build` | Production build üretir. |
| `start` | `next start` | Next.js production sunucusunu başlatır. |
| `lint` | `eslint` | ESLint kontrolünü çalıştırır. |
| `typecheck` | `tsc --noEmit` | TypeScript tip kontrolünü çalıştırır. |
| `check` | `npm run lint && npm run typecheck && npm run build` | Lint, tip kontrolü ve build'i sıralı çalıştırır. |

### App Router yapısı

- Yalnızca `/` rotasını oluşturan tek bir `page.tsx` bulunuyor.
- `page.tsx`, header, ana section'lar ve footer'ı sıralı olarak compose ediyor.
- Ayrı bir `/en` route segmenti veya header/footer linklerinin işaret ettiği alt sayfalar mevcut değil.
- Root layout İngilizce `lang` değeri, Duyvenvoorde metadata'sı ve Duyvenvoorde yerel fontlarını içeriyor.
- Server Component varsayılanı korunmuş; state, observer veya scroll erişimi gereken `SiteHeader`, `IntroSlider`, `Reveal` ve `WebshopSection` dosyaları `"use client"` ile sınırlandırılmış.

### Docker ve standalone durumu

- `next.config.ts` içinde `output: "standalone"` etkin.
- Production `Dockerfile`, Node `24.14.1-slim` tabanlı üç aşamalı `dependencies` / `builder` / `runner` akışı kullanıyor.
- Runner yalnızca `public`, `.next/standalone` ve `.next/static` çıktılarını alıyor; non-root `node` kullanıcısıyla `server.js` çalıştırıyor.
- `Dockerfile.dev`, Node 24 Alpine üzerinde geliştirme sunucusunu çalıştırıyor.
- `docker-compose.yml`, production `app` ve volume/hot-reload kullanan `dev` servislerini tanımlıyor; iki servis için de HTTP healthcheck mevcut.
- Sonuç olarak standalone deployment altyapısı hazır; InterFlower dönüşümünde framework veya container mimarisini değiştirmek gerekmiyor.

## 2. Mevcut sayfa sırası

`src/app/page.tsx` içindeki render sırası şöyledir:

1. Navbar — `SiteHeader`
2. Hero — `HeroSection`
3. IntroSlider içindeki ilk görsel bölüm — tanıtım metni, rota çizgisi ve sarı çiçek
4. IntroSlider içindeki ikinci görsel bölüm — hareketli büyük metin marquee'si ve mor çiçek
5. `ProductsSection`
6. `NetworkSection`
7. `WebshopSection`
8. `CareersSection`
9. Footer — `SiteFooter`

## 3. InterFlower section mapping tablosu

| Mevcut component / parça | Mevcut görevi | InterFlower karşılığı | Karar |
| --- | --- | --- | --- |
| `SiteHeader` | Sabit navbar, desktop navigasyon, mobil açılır menü, dil ve webshop linkleri | InterFlower logosu, tek sayfa anchor navigasyonu ve WhatsApp/sipariş CTA'sı | **Dönüştürülecek** |
| `HeroSection` | Responsive arka plan videosu, ana slogan ve ürün CTA'sı | InterFlower ana değer önerisi, marka görseli/video alanı ve ilk iletişim/sipariş CTA'sı | **Dönüştürülecek** |
| `IntroSlider` — intro bölümü | Şirket tanıtımı, dekoratif rota çizgisi ve çiçek görseli | InterFlower hakkında / marka hikâyesi bölümü | **Dönüştürülecek** |
| `IntroSlider` — marquee bölümü | Sürekli kayan büyük slogan ve merkez çiçek | V1'de karşılığı yok | **Kaldırılacak** |
| `ProductsSection` | Ürün anlatımı ve harici marka hikâyesi videosu | InterFlower ürünler / ürün kategorileri alanı | **Dönüştürülecek** |
| `NetworkSection` | Tedarik ağı, faydalar, iletişim bilgisi ve müşteri CTA'sı | InterFlower hizmet, kalite, lojistik ve güven avantajları | **Dönüştürülecek** |
| `WebshopSection` | Scroll tabanlı çiçek orbit görseli ve harici webshop CTA'sı | WhatsApp üzerinden sipariş ve hızlı iletişim alanı | **Dönüştürülecek** |
| `CareersSection` | Kariyer mesajı ve açık pozisyon CTA'sı | V1'de karşılığı yok | **Kaldırılacak** |
| `SiteFooter` | Menü, araç linkleri, newsletter, webshop kartı ve yasal linkler | InterFlower iletişim, anchor linkleri, sosyal/WhatsApp bilgileri ve gerekli yasal bağlantılar | **Dönüştürülecek** |
| `Reveal` | IntersectionObserver tabanlı tek seferlik içerik giriş animasyonu | InterFlower section giriş animasyonları | **Korunacak**, eşikler ve katmanlama QA sırasında ayarlanacak |
| `site-primitives` | Marka butonu, section etiketi, logo ve dekoratif çizgi primitive'leri | InterFlower ortak CTA, etiket, logo ve dekoratif primitive'leri | **Dönüştürülecek** |
| `icons.tsx` | Ortak SVG ikon componentleri | InterFlower'da yeniden kullanılabilen genel ikonlar | **Kısmen korunacak**; marka özel ikonlar değiştirilecek |
| Yeni `GallerySection` | Mevcut değil | InterFlower görsel galerisi | **Yeni oluşturulacak** |
| Yeni WhatsApp sipariş içeriği | Mevcut değil; yalnızca webshop CTA'ları var | Telefon numarası, önceden doldurulmuş mesaj ve net sipariş CTA'sı | **Yeni oluşturulacak**; `WebshopSection` dönüşümünün parçası olabilir |

## 4. Bilinen QA sorunları

| İlgili component | Sorun | Kısa teknik açıklama |
| --- | --- | --- |
| `SiteHeader` | Navigasyon hedefleri geçersiz | Logo `/en` adresine, menü linkleri ise mevcut olmayan `/en/...` rotalarına gidiyor. Kod tabanında yalnızca `/` sayfası bulunduğu için bu linkler 404 üretir; V1 anchor hedeflerine çevrilmelidir. |
| `SiteHeader` | Mobil menü davranışı eksik | Açık menü Escape tuşuyla veya dış alana tıklamayla kapanmıyor ve body scroll kilidi uygulamıyor. Uzun/küçük ekranlarda arka plan etkileşimi ve odak akışı ayrıca doğrulanmalı. |
| `HeroSection` | Gizli video da preload edilebilir | Mobil ve desktop için iki ayrı `<video preload="auto">` render ediliyor; yalnızca CSS ile biri gizleniyor. Tarayıcı iki kaynağı da indirebilir ve ilk yük maliyetini artırabilir. |
| `IntroSlider` | Marquee gereksiz sürekli animasyon çalıştırıyor | Web Animations API ile sonsuz animasyon başlatılıyor. V1 kararına göre bu bölüm tamamen kaldırılacak; böylece sürekli compositor işi de ortadan kalkacak. |
| `ProductsSection` / `StoryConnector` | Compact görünümde bağlantı çizgisi çift render ediliyor | İlk dikey SVG `lg:hidden`; ikinci SVG ise compact görünümde de görünür. İki path aynı başlangıç hattında üst üste binebilir ve çizgiyi beklenenden kalın gösterebilir. |
| `WebshopSection` | Scroll progress aralığı tamamlanmıyor | Progress hesabı `rect.height + window.innerHeight` üzerinden yapılıyor. Sticky bölüm görünürken `scrollStep` pratikte son kademelere ulaşmıyor; 8–12 arası transform sınıfları kullanılamıyor ve CTA geç beliriyor. |
| `WebshopSection` | Blur ve transform maliyeti yüksek | Çok sayıda ayrı `next/image` elemanı büyük orbit katmanlarında aynı anda transform ediliyor; dış katmanlarda sürekli `blur-[2px]` ve `blur-[0.7px]` uygulanıyor. Görsel yumuşama ve mobil compositing maliyeti cihaz bazında ayarlanmalı. |
| `WebshopSection` ve `SiteFooter` | Tekrarlanan DOM id'si var | Her iki bölüm de `id="webshop-heading"` kullanıyor. Bu, benzersiz id kuralını ihlal ediyor ve `aria-labelledby` çözümlemesini belirsizleştiriyor. |
| `SiteFooter` | Newsletter formu işlevsiz | Formun submit akışı veya handler'ı yok; buton `type="button"`. Alan görsel olarak form olsa da klavye submit'i ve gerçek kayıt işlemi bulunmuyor. V1'de kaldırılmalı veya gerçek gereksinime bağlanmalı. |
| `page.tsx` ve section'lar | Anchor navigasyon altyapısı eksik | V1 tek sayfa kararı için gereken sabit section id'leri mevcut değil; yalnızca `products` ve `footer` id'leri tanımlı. Navbar ve footer aynı canonical anchor setini kullanmalı. |
| `layout.tsx`, `site-primitives`, header, section'lar ve footer | Duyvenvoorde marka kalıntıları var | Metadata, logo alt metni, font/token adları, metinler, e-posta adresi, webshop/YouTube/yasal linkler ve yerel medya Duyvenvoorde'a bağlı. Production öncesi tam envanterle temizlenmeli. |
| Sayfa geneli | Z-index sözleşmesi dağınık | Header `z-[52]`, hero ve section içerikleri farklı yerel z-index değerleri kullanıyor; merkezi bir layer ölçeği yok. Yeni galeri, mobil menü ve WhatsApp CTA eklendiğinde stacking context'ler responsive olarak test edilmelidir. |
| `Reveal` ve `WebshopSection` | Animasyon erişilebilirliği parçalı | Reduced-motion desteği var ancak farklı componentlerde farklı yöntemlerle uygulanıyor. Yeni section'lar eklenirken tek ve tutarlı bir davranış korunmalı; görünür içerik hiçbir koşulda başlangıç opacity'sinde kalmamalı. |

## 5. Kesin kararlar

- V1 tek sayfa olacak ve navbar/footer navigasyonu section anchor'ları üzerinden çalışacak.
- `CareersSection` kaldırılacak.
- `IntroSlider` içindeki mevcut marquee bölümü kaldırılacak.
- Galeri için yeni bir section oluşturulacak.
- WhatsApp sipariş alanı oluşturulacak.
- Yeni animasyon kütüphanesi eklenmeyecek.
- Mevcut Next.js, React, TypeScript ve Tailwind tabanlı framework/styling sistemi korunacak.
- Duyvenvoorde marka varlıkları production öncesi temizlenecek. Buna metin, metadata, logo, font/token adları, görseller, videolar, e-posta adresleri ve iç/dış linkler dahildir.

## 6. Önerilen uygulama sırası

1. **Marka ve link temizliği:** Duyvenvoorde metin, metadata, asset ve URL envanterini çıkar; InterFlower içerik ve hedefleriyle değiştir.
2. **Navbar ve section iskeleti:** V1 canonical anchor listesini belirle; section id'lerini, navbar'ı, mobil menüyü ve footer linklerini aynı modele bağla.
3. **Section dönüşümleri:** Hero, intro, products, network, webshop ve footer'ı InterFlower içerik hiyerarşisine dönüştür; Careers ve marquee'yi kaldır.
4. **Yeni Galeri ve WhatsApp bölümleri:** Responsive galeri düzenini ve doğrulanmış WhatsApp numarası/mesaj şablonuyla sipariş CTA'sını ekle.
5. **Animasyon/blur/z-index düzeltmeleri:** Scroll progress hesabını düzelt; reduced-motion davranışını standardize et; orbit blur/performance değerlerini ve ortak stacking katmanlarını ayarla.
6. **Responsive QA:** Mobil, tablet ve desktop kırılımlarında menü, anchor offset'leri, medya kırpımı, galeri, WhatsApp CTA, overflow ve odak davranışlarını doğrula.
7. **Lint, typecheck ve build:** Sırasıyla `npm run lint`, `npm run typecheck` ve `npm run build` çalıştır; kalan hata ve uyarıları kapat.
