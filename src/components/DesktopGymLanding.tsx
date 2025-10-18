import React, { useState } from 'react';
// import { useBreakpoint } from '../hooks/useWindowSize';
import { WhatsAppButton } from './common';

// Import local assets
import {
  heroBackground,
  gymLogo,
  gymInterior,
  // locationMap,
  visitBackground,
  // coachJohn,
  // coachMartell,
  // coachAnsel,
  progress1,
  progress2,
  progress3,
  // nutritionBg,
  nutritionIcon,
  // crownIcon,
  // chessKing,
  // chessBishop,
  // chessKnight,
  // chessPawn,
  // facebookIcon,
  // messengerIcon,
  instagramIcon,
  vector1,
  vector2,
  vector3,
} from '../assets/images';

export default function DesktopGymLanding() {
  // const { isMobile } = useBreakpoint();
  const [formData, setFormData] = useState({
    nama: '',
    phoneNumber: ''
  });

  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSendWhatsApp = () => {
    if (!formData.nama.trim() || !formData.phoneNumber.trim()) {
      alert('Mohon lengkapi nama dan nomor telepon');
      return;
    }

    const message = `Halo kak saya mau daftar surya fitness\nnama: ${formData.nama}\nnomor telephone: ${formData.phoneNumber}`;
    const whatsappUrl = `https://wa.me/6281318443265?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClearForm = () => {
    setFormData({
      nama: '',
      phoneNumber: ''
    });
  };

  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="absolute bg-white h-[76px] left-0 top-0 w-full z-50" role="banner">
        <div className="flex items-center justify-between px-4 md:px-8 h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-[60px] w-[60px] md:h-[78px] md:w-[78px] mr-2 md:mr-4">
              <img alt="Logo S⭐R⭐Y Fitness Center - Gym Terbaik Bekasi" className="w-full h-full object-cover" src={gymLogo} />
            </div>
            <div className="font-monument text-primary text-[18px] md:text-[24px] leading-tight font-bold">
              <div>
                S<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>R<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>Y
              </div>
              <div>FITNESS</div>
            </div>
          </div>

          {/* Navigation */}
          {/* <nav className="flex items-center">
            <button 
              onClick={handleSendWhatsApp}
              className="bg-accent px-4 py-2 md:px-6 md:py-3 text-primary font-bold text-[14px] md:text-[16px] rounded-full hover:bg-yellow-300 transition-colors"
            >
              Daftar
            </button>
          </nav> */}
        </div>


      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[620px] mt-[73px]" role="main" aria-label="Hero section">
        <div className="absolute inset-0 bg-black/50">
          <img alt="Interior S⭐R⭐Y Fitness Center - Gym Modern Bekasi dengan Peralatan Lengkap" className="w-full h-full object-cover" src={heroBackground} />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary opacity-80" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-16 py-8">
          {/* Hero text */}
          <div className="flex-1 max-w-[500px] text-center md:text-left mb-4 md:mb-0">
            <h1 className="font-poppins font-bold text-white text-[24px] md:text-[50px] leading-tight mb-2 tracking-[2.5px]">
              Mulai Bentuk Tubuh Impian Anda!
            </h1>
            <p className="font-poppins font-black text-accent text-[24px] md:text-[50px] leading-tight tracking-[2.5px]">
              Ayo Bergabung!
            </p>
            {/* Hero Tagline */}
            <p className="font-poppins font-semibold text-white text-[16px] md:text-[24px] leading-relaxed mt-3 md:mt-4 tracking-[1px] italic">
              "Latihan serius, gaya juga harus"
            </p>
            <button 
              onClick={() => {
                const message = `Halo kak saya tertarik dengan S⭐R⭐Y Fitness Center dan ingin bergabung. Bisakah Anda memberikan informasi lebih lanjut tentang membership dan fasilitas yang tersedia?`;
                const whatsappUrl = `https://wa.me/6281318443265?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-cream px-4 py-2 md:px-6 md:py-3 text-gray font-bold text-[16px] md:text-[20px] rounded-full mt-4 md:mt-8 hover:bg-yellow-100 transition-colors"
            >
              Gabung Sekarang
            </button>
          </div>

          {/* Hero image/logo */}
          <div className="flex-1 flex justify-center">
            <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
              <img alt="Logo Besar S⭐R⭐Y Fitness Center Bekasi - Pusat Kebugaran Pria dan Wanita" className="w-full h-full object-contain" src={gymLogo} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-primary py-8 md:py-16 px-4 md:px-16" aria-label="Tentang S⭐R⭐Y Fitness Center">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-8 md:mb-0">
            <div className="text-center mb-8">
              <p className="font-poppins font-semibold text-white text-[18px] md:text-[24px] mb-2">Tentang</p>
              <h2 className="font-monument text-white text-[24px] md:text-[40px] tracking-[2px] md:tracking-[4px] font-bold">
                S<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>R<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>Y GYM UNTUK PRIA & WANITA
              </h2>
            </div>
            <p className="font-poppins font-bold text-accent text-[16px] md:text-[20px] leading-relaxed tracking-[1px] max-w-[644px] text-center md:text-left">
              S<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>R<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>Y (SURYA Fitnes) adalah tempat GYM yg nyaman, lokasi strategis, dengan konsep yang tepat untuk member yang ingin memperbaiki dan mentransformasi penampilan dengan Program yang disesuaikan dengan komposisi tubuh.
            </p>
          </div>
          
          <div className="w-full max-w-[300px] md:w-[381px] h-[200px] md:h-[573px] rounded-lg overflow-hidden md:ml-8">
            <img alt="Fasilitas Interior S⭐R⭐Y Gym - Ruang Latihan Lengkap dengan Peralatan Modern" className="w-full h-full object-cover" src={gymInterior} />
          </div>
        </div>

        {/* What we offer section */}
        <div className="mt-8 md:mt-16">
          <h3 className="font-monument text-white text-[24px] md:text-[36px] mb-8 md:mb-12 text-center">Yang Kami Tawarkan:</h3>
          
          <div className="md:flex md:justify-center md:space-x-12">
            {/* Mobile: Horizontal scroll container */}
            <div className="md:hidden flex space-x-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
              {/* 24/7 Chat */}
              <div className="relative flex-shrink-0">
                <div className="bg-[#ece9e9] w-[180px] h-[180px] rounded-[30px] border border-[#b1b0a0] shadow-lg">
                  <div className="bg-[#ece9e9] w-[160px] h-[160px] rounded-[24px] border-4 border-primary m-[10px] flex flex-col items-center justify-center">
                    <p className="font-monument text-primary text-[48px] leading-none">24</p>
                    <p className="font-monument text-primary text-[48px] leading-none">/7</p>
                    <p className="font-monument text-primary text-[16px] mt-2">Chat</p>
                  </div>
                </div>
              </div>

              {/* 1 on 1 Coaching */}
              <div className="relative flex-shrink-0">
                <div className="bg-[#ece9e9] w-[180px] h-[180px] rounded-[30px] border border-[#b1b0a0] shadow-lg">
                  <div className="bg-[#ece9e9] w-[160px] h-[160px] rounded-[24px] border-4 border-primary m-[10px] flex flex-col items-center justify-center">
                    <div className="flex items-center space-x-1">
                      <p className="font-monument text-primary text-[36px]">1</p>
                      <p className="font-monument text-primary text-[24px]">on</p>
                      <p className="font-monument text-primary text-[36px]">1</p>
                    </div>
                    <p className="font-monument text-primary text-[18px] text-center">Pelatihan</p>
                  </div>
                </div>
              </div>

              {/* Nutrition Plan Guide */}
              <div className="relative flex-shrink-0">
                <div className="bg-[#ece9e9] w-[180px] h-[180px] rounded-[30px] border border-[#b1b0a0] shadow-lg">
                  <div className="bg-[#ece9e9] w-[160px] h-[160px] rounded-[24px] border-4 border-primary m-[10px] flex flex-col items-center justify-center">
                    <div className="w-[50px] h-[50px] mb-3 flex items-center justify-center">
                      <img alt="Nutrition Icon" className="w-[30px] h-[30px] object-contain" src={nutritionIcon} />
                    </div>
                    <p className="font-monument text-primary text-[14px] text-center leading-tight">
                      Panduan<br />Nutrisi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Normal flex layout */}
            <div className="hidden md:flex md:justify-center md:space-x-12">
              {/* 24/7 Chat */}
              <div className="relative">
                <div className="bg-[#ece9e9] w-[211px] h-[211px] rounded-[35px] border border-[#b1b0a0] shadow-lg">
                  <div className="bg-[#ece9e9] w-[190px] h-[190px] rounded-[27px] border-4 border-primary m-[10px] flex flex-col items-center justify-center">
                    <p className="font-monument text-primary text-[64px] leading-none">24</p>
                    <p className="font-monument text-primary text-[64px] leading-none">/7</p>
                    <p className="font-monument text-primary text-[20px] mt-2">Chat</p>
                  </div>
                </div>
              </div>

              {/* 1 on 1 Coaching */}
              <div className="relative">
                <div className="bg-[#ece9e9] w-[211px] h-[211px] rounded-[35px] border border-[#b1b0a0] shadow-lg">
                  <div className="bg-[#ece9e9] w-[190px] h-[190px] rounded-[27px] border-4 border-primary m-[10px] flex flex-col items-center justify-center">
                    <div className="flex items-center space-x-2">
                      <p className="font-monument text-primary text-[48px]">1</p>
                      <p className="font-monument text-primary text-[32px]">on</p>
                      <p className="font-monument text-primary text-[48px]">1</p>
                    </div>
                    <p className="font-monument text-primary text-[24px] text-center">Pelatihan</p>
                  </div>
                </div>
              </div>

              {/* Nutrition Plan Guide */}
              <div className="relative">
                <div className="bg-[#ece9e9] w-[211px] h-[211px] rounded-[35px] border border-[#b1b0a0] shadow-lg">
                  <div className="bg-[#ece9e9] w-[190px] h-[190px] rounded-[27px] border-4 border-primary m-[10px] flex flex-col items-center justify-center">
                    <div className="w-[70px] h-[70px] mb-4 flex items-center justify-center">
                      <img alt="Nutrition Icon" className="w-[40px] h-[40px] object-contain" src={nutritionIcon} />
                    </div>
                    <p className="font-monument text-primary text-[16px] text-center leading-tight">
                      Panduan<br />Nutrisi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="bg-[#ece9e9] py-8 md:py-16 px-4 md:px-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          <img alt="" className="absolute left-[66px] top-0 w-[565px] h-[522px]" src={vector1} />
          <img alt="" className="absolute left-[66px] top-0 w-[565px] h-[522px]" src={vector2} />
          <img alt="" className="absolute right-[66px] bottom-0 w-[565px] h-[522px]" src={vector3} />
        </div>

        <div className="relative z-10">
          <h2 className="font-monument text-[24px] md:text-[40px] text-center text-[#151515] tracking-[2px] md:tracking-[4px] mb-4">
            <span className="text-[#2b2b2b]">BERGABUNG</span> DENGAN MEMBERSHIP KAMI
          </h2>
          {/* Membership Tagline */}
          <p className="font-poppins font-semibold text-[#2b2b2b] text-[16px] md:text-[20px] text-center mb-4 md:mb-6 tracking-[1px] italic">
            "Murah bukan berarti murahan"
          </p>
          <h3 className="font-monument text-primary text-[28px] md:text-[48px] text-center tracking-[2.8px] md:tracking-[4.8px] mb-6 md:mb-8">
            Paket Kami:
          </h3>

          {/* Promo Note */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 mb-8 md:mb-12 mx-auto max-w-md shadow-lg">
            <p className="font-monument text-primary text-[14px] md:text-[16px] text-center font-bold tracking-[1px]">
              HARGA SPESIAL PROMO REVIEW GOOGLE MAPS
            </p>
          </div>

          {/* Regular Packages */}
          <div className="mb-8 md:mb-12">
            <h4 className="font-monument text-[#2b2b2b] text-[20px] md:text-[28px] text-center mb-6 md:mb-8 tracking-[2px]">
              PAKET REGULER
            </h4>
            
            {/* Mobile: Vertical stack */}
            <div className="md:hidden space-y-4 px-4">
              {/* Per Visit */}
              <div className="bg-gradient-to-r from-[#4A5FBF] to-[#2D1B7A] rounded-[16px] border-[2px] border-white shadow-lg p-4">
                <div className="text-center">
                  <p className="font-monument text-white text-[24px] leading-none mb-2">25K</p>
                  <p className="font-poppins font-bold text-white text-[16px]">Per Visit</p>
                </div>
              </div>

              {/* 1 Month Member */}
              <div className="bg-gradient-to-r from-[#2D1B7A] to-[#1A1B3F] rounded-[16px] border-[2px] border-white shadow-lg p-4">
                <div className="text-center">
                  <p className="font-monument text-white text-[24px] leading-none mb-2">160K</p>
                  <p className="font-poppins font-bold text-white text-[16px]">Member 1 Bulan</p>
                </div>
              </div>

              {/* 3 Month Member */}
              <div className="bg-gradient-to-r from-[#1A1B3F] to-[#0F1729] rounded-[16px] border-[2px] border-white shadow-lg p-4">
                <div className="text-center">
                  <p className="font-monument text-white text-[24px] leading-none mb-2">480K</p>
                  <p className="font-monument text-white text-[20px] leading-tight mb-2">Member 3 Bulan</p>
                  <p className="font-poppins font-bold text-[#FFD700] text-[14px]">(FREE 1 BULAN)</p>
                </div>
              </div>
            </div>

            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex justify-center space-x-6">
              {/* Per Visit */}
              <div className="bg-gradient-to-r from-[#4A5FBF] to-[#2D1B7A] w-[220px] h-[160px] rounded-[20px] border-[3px] border-white shadow-lg p-6 flex flex-col items-center justify-center">
                <p className="font-monument text-white text-[36px] leading-none mb-3">25K</p>
                <p className="font-poppins font-bold text-white text-[20px] text-center">Per Visit</p>
              </div>

              {/* 1 Month Member */}
              <div className="bg-gradient-to-r from-[#2D1B7A] to-[#1A1B3F] w-[220px] h-[160px] rounded-[20px] border-[3px] border-white shadow-lg p-6 flex flex-col items-center justify-center">
                <p className="font-monument text-white text-[36px] leading-none mb-3">160K</p>
                <p className="font-poppins font-bold text-white text-[20px] text-center">Member 1 Bulan</p>
              </div>

              {/* 3 Month Member */}
              <div className="bg-gradient-to-r from-[#1A1B3F] to-[#0F1729] w-[220px] h-[160px] rounded-[20px] border-[3px] border-white shadow-lg p-6 flex flex-col items-center justify-center">
                <p className="font-monument text-white text-[24px] leading-none mb-2">480K</p>
                <p className="font-monument text-white text-[24px] leading-tight mb-2 text-center">Member 3 Bulan</p>
                <p className="font-poppins font-bold text-[#FFD700] text-[16px] text-center">(FREE 1 BULAN)</p>
              </div>
            </div>
          </div>

          {/* Student Packages */}
          <div className="mb-8">
            <h4 className="font-monument text-[#2b2b2b] text-[20px] md:text-[28px] text-center mb-6 md:mb-8 tracking-[2px]">
              PAKET PELAJAR
            </h4>
            <p className="font-poppins text-[#666] text-[14px] md:text-[16px] text-center mb-6 italic">
              (Menunjukkan kartu pelajar)
            </p>
            
            {/* Mobile: Vertical stack */}
            <div className="md:hidden space-y-4 px-4">
              {/* Per Visit Student */}
              <div className="bg-gradient-to-r from-[#6B7FE8] to-[#4A5FBF] rounded-[16px] border-[2px] border-white shadow-lg p-4">
                <div className="text-center">
                  <p className="font-monument text-white text-[24px] leading-none mb-2">20K</p>
                  <p className="font-poppins font-bold text-white text-[16px]">Per Visit Pelajar</p>
                </div>
              </div>

              {/* 1 Month Student */}
              <div className="bg-gradient-to-r from-[#4A5FBF] to-[#2D1B7A] rounded-[16px] border-[2px] border-white shadow-lg p-4">
                <div className="text-center">
                  <p className="font-monument text-white text-[24px] leading-none mb-2">150K</p>
                  <p className="font-poppins font-bold text-white text-[16px]">Member Pelajar</p>
                </div>
              </div>

              {/* 3 Month Student */}
              <div className="bg-gradient-to-r from-[#2D1B7A] to-[#1A1B3F] rounded-[16px] border-[2px] border-white shadow-lg p-4">
                <div className="text-center">
                  <p className="font-monument text-white text-[24px] leading-none mb-2">450K</p>
                  <p className="font-monument text-white text-[18px] leading-tight mb-2">Member Pelajar 3 Bulan</p>
                  <p className="font-poppins font-bold text-[#FFD700] text-[14px]">(FREE 1 BULAN)</p>
                </div>
              </div>
            </div>

            {/* Desktop: Horizontal layout */}
            <div className="hidden md:flex justify-center space-x-6">
              {/* Per Visit Student */}
              <div className="bg-gradient-to-r from-[#6B7FE8] to-[#4A5FBF] w-[220px] h-[160px] rounded-[20px] border-[3px] border-white shadow-lg p-6 flex flex-col items-center justify-center">
                <p className="font-monument text-white text-[36px] leading-none mb-3">20K</p>
                <p className="font-poppins font-bold text-white text-[18px] text-center">Per Visit Pelajar</p>
              </div>

              {/* 1 Month Student */}
              <div className="bg-gradient-to-r from-[#4A5FBF] to-[#2D1B7A] w-[220px] h-[160px] rounded-[20px] border-[3px] border-white shadow-lg p-6 flex flex-col items-center justify-center">
                <p className="font-monument text-white text-[36px] leading-none mb-3">150K</p>
                <p className="font-poppins font-bold text-white text-[18px] text-center">Member Pelajar</p>
              </div>

              {/* 3 Month Student */}
              <div className="bg-gradient-to-r from-[#2D1B7A] to-[#1A1B3F] w-[220px] h-[160px] rounded-[20px] border-[3px] border-white shadow-lg p-6 flex flex-col items-center justify-center">
                <p className="font-monument text-white text-[36px] leading-none mb-3">450K</p>
                <p className="font-monument text-white text-[20px] leading-tight mb-2 text-center">Member Pelajar<br />3 Bulan</p>
                <p className="font-poppins font-bold text-[#FFD700] text-[16px] text-center">(FREE 1 BULAN)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Trainer Promo Section */}
      <section className="bg-gradient-to-br from-primary via-[#2b2b2b] to-black py-8 md:py-16 px-4 md:px-16 relative overflow-hidden">
        {/* Promo Badge */}
        <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg transform rotate-12 animate-pulse">
            <p className="font-monument text-[12px] md:text-[16px] font-bold tracking-wider">PROMO!</p>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-monument text-accent text-[28px] md:text-[48px] tracking-[2.8px] md:tracking-[4.8px] mb-3 md:mb-4">
              PROMO PERSONAL TRAINER
            </h2>
            <p className="font-poppins font-semibold text-white text-[16px] md:text-[20px] tracking-[1px] italic">
              "Wujudkan tubuh impianmu dengan bimbingan profesional"
            </p>
            
            {/* Expiry Badge */}
            <div className="inline-block mt-4 md:mt-6 bg-yellow-400 text-primary px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg">
              <p className="font-monument text-[14px] md:text-[18px] font-bold tracking-[1px]">
                ⏰ BERLAKU SAMPAI 31 DESEMBER
              </p>
            </div>
          </div>

          {/* Promo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Single Package */}
            <div className="bg-gradient-to-br from-[#4A5FBF] to-[#2D1B7A] rounded-[24px] border-4 border-accent shadow-2xl p-6 md:p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="bg-accent text-primary px-4 py-2 rounded-full inline-block mb-4 md:mb-6">
                  <p className="font-monument text-[16px] md:text-[20px] font-bold">SINGLE</p>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <p className="font-monument text-white text-[36px] md:text-[56px] leading-none mb-2">
                    900K
                  </p>
                  <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
                </div>

                <div className="bg-white/10 rounded-[16px] p-4 md:p-6 mb-4 md:mb-6">
                  <p className="font-poppins font-bold text-white text-[16px] md:text-[20px] mb-3">
                    Paket Termasuk:
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="font-poppins text-white text-[14px] md:text-[18px] flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>10x pertemuan</span>
                    </li>
                    <li className="font-poppins text-accent text-[14px] md:text-[18px] flex items-start font-bold">
                      <span className="mr-2">🎁</span>
                      <span>FREE 2x pertemuan</span>
                    </li>
                    <li className="font-poppins text-white text-[14px] md:text-[18px] flex items-start">
                      <span className="text-accent mr-2">📅</span>
                      <span>Max 2 bulan</span>
                    </li>
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    const message = `Halo! Saya tertarik dengan PROMO PERSONAL TRAINER - Paket SINGLE (Rp900.000). Bisa tolong berikan informasi lebih lanjut?`;
                    const whatsappUrl = `https://wa.me/6281318443265?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-accent text-primary px-6 py-3 rounded-full font-poppins font-bold text-[16px] md:text-[18px] hover:bg-yellow-300 transition-colors w-full"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>

            {/* Couple Package */}
            <div className="bg-gradient-to-br from-[#2D1B7A] to-[#1A1B3F] rounded-[24px] border-4 border-accent shadow-2xl p-6 md:p-8 transform hover:scale-105 transition-transform duration-300 relative">
              {/* Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-accent text-primary px-4 py-1 rounded-full shadow-lg">
                  <p className="font-monument text-[12px] md:text-[14px] font-bold">HEMAT!</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-accent text-primary px-4 py-2 rounded-full inline-block mb-4 md:mb-6">
                  <p className="font-monument text-[16px] md:text-[20px] font-bold">COUPLE</p>
                </div>
                
                <div className="mb-4 md:mb-6">
                  <p className="font-monument text-white text-[36px] md:text-[56px] leading-none mb-2">
                    1.5JT
                  </p>
                  <div className="h-1 w-24 bg-accent mx-auto mb-4"></div>
                </div>

                <div className="bg-white/10 rounded-[16px] p-4 md:p-6 mb-4 md:mb-6">
                  <p className="font-poppins font-bold text-white text-[16px] md:text-[20px] mb-3">
                    Paket Termasuk:
                  </p>
                  <ul className="space-y-2 text-left">
                    <li className="font-poppins text-white text-[14px] md:text-[18px] flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span>10x pertemuan (berdua)</span>
                    </li>
                    <li className="font-poppins text-accent text-[14px] md:text-[18px] flex items-start font-bold">
                      <span className="mr-2">🎁</span>
                      <span>FREE 2x pertemuan</span>
                    </li>
                    <li className="font-poppins text-white text-[14px] md:text-[18px] flex items-start">
                      <span className="text-accent mr-2">📅</span>
                      <span>Max 2 bulan</span>
                    </li>
                  </ul>
                </div>

                <button 
                  onClick={() => {
                    const message = `Halo! Saya tertarik dengan PROMO PERSONAL TRAINER - Paket COUPLE (Rp1.500.000). Bisa tolong berikan informasi lebih lanjut?`;
                    const whatsappUrl = `https://wa.me/6281318443265?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-accent text-primary px-6 py-3 rounded-full font-poppins font-bold text-[16px] md:text-[18px] hover:bg-yellow-300 transition-colors w-full"
                >
                  Daftar Sekarang
                </button>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="bg-white/10 backdrop-blur-sm rounded-[20px] border-2 border-accent/30 p-4 md:p-6 max-w-3xl mx-auto">
            <div className="flex items-start space-x-3 md:space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-[14px] md:text-[18px]">!</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="font-poppins font-bold text-accent text-[14px] md:text-[18px] mb-2">
                  Catatan Penting:
                </p>
                <p className="font-poppins text-white text-[14px] md:text-[16px] leading-relaxed">
                  Harga di atas belum termasuk membership bulanan sebesar <span className="font-bold text-accent">Rp160.000/bulan</span>. Promo berlaku untuk pendaftaran baru dan tidak dapat digabungkan dengan promo lainnya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Gym Section */}
      <section className="relative bg-white/50 py-8 md:py-16 px-4 md:px-16">
        <div className="absolute inset-0">
          <img alt="Gym Background" className="w-full h-full object-cover opacity-60" src={visitBackground} />
          <div className="absolute inset-0 bg-white/50" />
        </div>

        <div className="relative z-10">
          <h2 className="font-monument text-primary text-[24px] md:text-[40px] tracking-[2px] md:tracking-[4px] mb-6 md:mb-8 text-center md:text-left">KUNJUNGI GYM KAMI</h2>
          
          <div className="flex flex-col md:flex-row">
            {/* Google Maps */}
            <div className="w-full md:w-[390px] h-[250px] md:h-[532px] rounded-[20px] overflow-hidden mb-6 md:mb-0 md:mr-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.899864157596!2d106.9517666!3d-6.276894700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698daf369fe30f%3A0x2071deee7de2ee43!2sRAJAne%20WARUNG!5e0!3m2!1sen!2sid!4v1760538943731!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi S⭐R⭐Y Fitness Center - Jl. Dr. Ratna No.117, Jatikramat, Bekasi"
              />
            </div>

            {/* Contact Information */}
            <div className="bg-[#3e3e3e] rounded-[20px] md:rounded-tr-[40px] p-4 md:p-8 flex-1">
              <div className="text-white">
                <p className="font-poppins text-[14px] md:text-[20px] mb-3 md:mb-4">
                  <span className="font-medium text-accent">Alamat:</span>
                  <span className="font-bold"> Jl. Dr. Ratna No.117, RT.004/RW.01, Jatikramat, Kec. Jatiasih, Kota Bks, Jawa Barat 17412</span>
                </p>
                <div className="mb-6 md:mb-8">
                  <p className="font-medium text-accent font-poppins text-[14px] md:text-[20px] mb-3">Nomor Kontak:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <a 
                        href="https://wa.me/6281318443265" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
                        aria-label="Chat WhatsApp 0813-184-4326"
                      >
                        <svg className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] fill-green-500" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                        </svg>
                        <span className="font-bold text-white text-[14px] md:text-[20px]">0813-184-4326</span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <a 
                        href="https://wa.me/6281319144078" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
                        aria-label="Chat WhatsApp 0813-1914-4078"
                      >
                        <svg className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] fill-green-500" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
                        </svg>
                        <span className="font-bold text-white text-[14px] md:text-[20px]">0813-1914-4078</span>
                      </a>
                    </div>
                  </div>
                </div>

                <p className="font-monument text-[#d3cfff] text-[18px] md:text-[24px] mb-3 md:mb-4">MEDIA SOSIAL KAMI:</p>
                <div className="flex space-x-3 md:space-x-4">
                  <a 
                    href="https://instagram.com/rajanewarung" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:scale-110 transition-transform duration-200"
                    aria-label="Kunjungi Instagram @rajanewarung"
                  >
                    <img alt="Instagram" className="w-[35px] h-[35px] md:w-[47px] md:h-[47px]" src={instagramIcon} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Register Section */}
      <section className="bg-[rgba(62,62,62,0.7)] py-8 md:py-16 px-4 md:px-16">
        <h2 className="font-monument text-white text-[24px] md:text-[40px] tracking-[2px] md:tracking-[3.2px] mb-6 md:mb-8 text-center md:text-left">DAFTAR</h2>
        <div className="flex flex-col lg:flex-row">
          {/* Registration Form */}
          <div className="bg-white w-full lg:w-[453px] rounded-[20px] border border-black shadow-lg p-4 md:p-8 mb-8 lg:mb-0 lg:mr-8">
            
            <div className="space-y-4 md:space-y-6">
              <div>
                <label className="font-poppins font-bold text-[#151515] text-[16px] md:text-[20px] block mb-2">Nama</label>
                <input 
                  type="text" 
                  value={formData.nama}
                  onChange={(e) => handleFormChange('nama', e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="bg-[#bcbcbc] h-[32px] md:h-[36px] rounded-full w-full px-4 outline-none text-sm md:text-base placeholder-gray-600" 
                />
              </div>
              <div>
                <label className="font-poppins font-bold text-[#151515] text-[16px] md:text-[20px] block mb-2">Nomor Telepon</label>
                <input 
                  type="tel" 
                  value={formData.phoneNumber}
                  onChange={(e) => handleFormChange('phoneNumber', e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className="bg-[#bcbcbc] h-[32px] md:h-[36px] rounded-full w-full px-4 outline-none text-sm md:text-base placeholder-gray-600" 
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
              <button 
                onClick={handleSendWhatsApp}
                className="bg-[#deba3b] px-4 md:px-6 py-2 md:py-3 text-primary font-poppins font-bold text-[16px] md:text-[20px] rounded-full hover:bg-yellow-400 transition-colors"
              >
                Kirim
              </button>
              <button 
                onClick={handleClearForm}
                className="bg-cream px-4 md:px-6 py-2 md:py-3 text-[#2b2b2b] font-poppins font-bold text-[16px] md:text-[20px] rounded-full hover:bg-yellow-100 transition-colors"
              >
                Hapus Data
              </button>
            </div>
          </div>

          {/* Customer's Progress */}
          <div className="flex-1">
            {/* <h3 className="font-monument text-[#deba3b] text-[24px] md:text-[40px] mb-6 md:mb-8 text-center lg:text-left">Progress Member</h3>
             */}
            {/* Mobile: Horizontal scroll */}
            <div className="lg:hidden flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              <div className="w-[200px] h-[250px] flex-shrink-0 rounded-lg overflow-hidden">
                <img alt="Customer Progress 1" className="w-full h-full object-cover" src={progress1} />
              </div>
              <div className="w-[200px] h-[250px] flex-shrink-0 rounded-lg overflow-hidden">
                <img alt="Customer Progress 2" className="w-full h-full object-cover" src={progress2} />
              </div>
              <div className="w-[200px] h-[250px] flex-shrink-0 rounded-lg overflow-hidden">
                <img alt="Customer Progress 3" className="w-full h-full object-cover" src={progress3} />
              </div>
            </div>

            {/* Desktop: Normal flex layout */}
            <div className="hidden lg:flex space-x-4">
              <div className="w-[271px] h-[350px] rounded-lg overflow-hidden">
                <img alt="Customer Progress 1" className="w-full h-full object-cover" src={progress1} />
              </div>
              <div className="w-[271px] h-[350px] rounded-lg overflow-hidden">
                <img alt="Customer Progress 2" className="w-full h-full object-cover" src={progress2} />
              </div>
              <div className="w-[271px] h-[350px] rounded-lg overflow-hidden">
                <img alt="Customer Progress 3" className="w-full h-full object-cover" src={progress3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 md:py-8 px-4 md:px-16" role="contentinfo">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] mr-2">
              <img alt="Logo S⭐R⭐Y Fitness Center" className="w-full h-full object-cover" src={gymLogo} />
            </div>
            <div className="font-monument text-primary text-[16px] md:text-[20px] leading-tight font-bold">
              <div>
                S<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>R<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>Y
              </div>
              <div>FITNESS</div>
            </div>
          </div>
          <p className="font-poppins text-[#666] text-[14px] md:text-[16px] mb-2">
            Jl. Dr. Ratna No.117, Jatikramat, Bekasi
          </p>
          <p className="font-poppins text-[#666] text-[14px] md:text-[16px]">
            © 2025 S<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>R<span style={{ fontSize: '0.35em', verticalAlign: 'middle', display: 'inline-block', margin: '0 -0.05em' }}>⭐</span>Y Fitness Center. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="+6282111701599"
        message="Halo! Saya tertarik dengan program di S⭐R⭐Y Fitness Center. Bisakah Anda memberikan informasi lebih lanjut tentang membership dan fasilitas yang tersedia?"
        tooltipText="Chat dengan kami di WhatsApp"
      />
    </div>
  );
}