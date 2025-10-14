import React, { useState } from 'react';
import { useBreakpoint } from '../hooks/useWindowSize';
import { WhatsAppButton } from './common';

// Import local assets
import {
  heroBackground,
  gymLogo,
  gymInterior,
  locationMap,
  visitBackground,
  coachJohn,
  coachMartell,
  coachAnsel,
  progress1,
  progress2,
  progress3,
  nutritionBg,
  nutritionIcon,
  crownIcon,
  chessKing,
  chessBishop,
  chessKnight,
  chessPawn,
  facebookIcon,
  messengerIcon,
  instagramIcon,
  vector1,
  vector2,
  vector3,
} from '../assets/images';

export default function DesktopGymLanding() {
  const { isMobile } = useBreakpoint();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="absolute bg-white h-[76px] left-0 top-0 w-full z-50" role="banner">
        <div className="flex items-center justify-between px-4 md:px-8 h-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-[60px] w-[60px] md:h-[78px] md:w-[78px] mr-2 md:mr-4">
              <img alt="Logo S⭐R⭐Y Fitness Center - Gym Terbaik Jakarta" className="w-full h-full object-cover" src={gymLogo} />
            </div>
            <div className="font-monument text-primary text-[18px] md:text-[24px] leading-tight">
              <div>S⭐R⭐Y</div>
              <div>FITNESS</div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="flex flex-col space-y-1 z-50 relative"
              aria-label="Buka/Tutup Menu Navigasi"
              aria-expanded={isMenuOpen}
            >
              <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </button>
          )}

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="flex items-center space-x-8">
              <button className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors">
                Tentang
              </button>
              <button className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors">
                Mengapa Bergabung?
              </button>
              <button className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors">
                Paket
              </button>
              <button className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors">
                Pelatih
              </button>
              <button className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors">
                Kunjungi Gym Kami
              </button>
              <button className="bg-accent px-6 py-3 text-primary font-bold text-[16px] rounded-full hover:bg-yellow-300 transition-colors">
                Daftar
              </button>
            </nav>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <nav className={`absolute top-[76px] left-0 w-full bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="flex flex-col p-4 space-y-2">
              <button 
                className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang
              </button>
              <button 
                className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Mengapa Bergabung?
              </button>
              <button 
                className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Paket
              </button>
              <button 
                className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Pelatih
              </button>
              <button 
                className="px-5 py-3 text-primary font-bold text-[16px] hover:bg-gray-100 rounded-lg transition-colors text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                Kunjungi Gym Kami
              </button>
              <button 
                className="bg-accent px-6 py-3 text-primary font-bold text-[16px] rounded-full hover:bg-yellow-300 transition-colors mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Daftar
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[620px] mt-[73px]" role="main" aria-label="Hero section">
        <div className="absolute inset-0 bg-black/50">
          <img alt="Interior S⭐R⭐Y Fitness Center - Gym Modern Jakarta dengan Peralatan Lengkap" className="w-full h-full object-cover" src={heroBackground} />
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
            <button className="bg-cream px-4 py-2 md:px-6 md:py-3 text-gray font-bold text-[16px] md:text-[20px] rounded-full mt-4 md:mt-8 hover:bg-yellow-100 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>

          {/* Hero image/logo */}
          <div className="flex-1 flex justify-center">
            <div className="w-[200px] h-[200px] md:w-[400px] md:h-[400px]">
              <img alt="Logo Besar S⭐R⭐Y Fitness Center Jakarta - Pusat Kebugaran Pria dan Wanita" className="w-full h-full object-contain" src={gymLogo} />
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
              <h2 className="font-monument text-white text-[24px] md:text-[40px] tracking-[2px] md:tracking-[4px]">
                S⭐R⭐Y GYM UNTUK PRIA & WANITA
              </h2>
            </div>
            <p className="font-poppins font-bold text-accent text-[16px] md:text-[20px] leading-relaxed tracking-[1px] max-w-[644px] text-center md:text-left">
              S⭐R⭐Y Gym Fitness Center menyediakan pelatihan dan conditioning yang tepat untuk member yang ingin memperbaiki dan mentransformasi tubuh mereka dengan Program yang disesuaikan dengan komposisi tubuh.
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
                    <div className="w-[70px] h-[70px] mb-2 relative">
                      <img alt="Nutrition Background" className="w-full h-full" src={nutritionBg} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img alt="Nutrition Icon" className="w-[20px] h-auto" src={nutritionIcon} />
                      </div>
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
                    <div className="w-[92px] h-[93px] mb-4 relative">
                      <img alt="Nutrition Background" className="w-full h-full" src={nutritionBg} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img alt="Nutrition Icon" className="w-[28px] h-auto" src={nutritionIcon} />
                      </div>
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
          <h3 className="font-monument text-primary text-[28px] md:text-[48px] text-center tracking-[2.8px] md:tracking-[4.8px] mb-8 md:mb-16">
            Paket <span className="text-white">Kami:</span>
          </h3>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden flex space-x-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
            {/* Annual Membership */}
            <div className="bg-white w-[160px] h-[180px] flex-shrink-0 rounded-[16px] border-[2px] border-primary shadow-lg p-3 flex flex-col items-center justify-center">
              <img alt="Crown Icon" className="w-[35px] h-[35px] mb-3" src={chessPawn} />
              <p className="font-poppins font-bold text-primary text-[14px] text-center">Membership Tahunan</p>
            </div>

            {/* Weekly Rate */}
            <div className="bg-[#3e3e3e] w-[160px] h-[180px] flex-shrink-0 rounded-[16px] border-[2px] border-white shadow-lg p-3 flex flex-col items-center justify-center">
              <img alt="Knight Icon" className="w-[35px] h-[35px] mb-1" src={chessKnight} />
              <p className="font-monument text-white text-[32px] leading-none">7</p>
              <p className="font-monument text-white text-[20px] leading-none">Hari</p>
              <p className="font-poppins font-bold text-white text-[14px] text-center mt-1">Paket Mingguan</p>
            </div>

            {/* Monthly Rate */}
            <div className="bg-[#77749b] w-[160px] h-[180px] flex-shrink-0 rounded-[16px] border-[2px] border-white shadow-lg p-3 flex flex-col items-center justify-center">
              <img alt="Bishop Icon" className="w-[35px] h-[35px] mb-1" src={chessBishop} />
              <p className="font-monument text-white text-[32px] leading-none">1</p>
              <p className="font-monument text-white text-[20px] leading-none">Bulan</p>
              <p className="font-poppins font-bold text-white text-[14px] text-center mt-1">Paket Bulanan</p>
            </div>

            {/* Biannual Rate */}
            <div className="bg-[#332f64] w-[160px] h-[180px] flex-shrink-0 rounded-[16px] border-[2px] border-white shadow-lg p-3 flex flex-col items-center justify-center">
              <img alt="King Icon" className="w-[35px] h-[35px] mb-1" src={chessKing} />
              <p className="font-monument text-white text-[32px] leading-none">6</p>
              <p className="font-monument text-white text-[18px] leading-none">Bulan</p>
              <p className="font-poppins font-bold text-white text-[14px] text-center mt-1">Paket 6 Bulan</p>
            </div>

            {/* Annual Rate */}
            <div className="bg-primary w-[160px] h-[180px] flex-shrink-0 rounded-[16px] border-[2px] border-white shadow-lg p-3 flex flex-col items-center justify-center">
              <img alt="Crown Icon" className="w-[35px] h-[35px] mb-1" src={crownIcon} />
              <p className="font-monument text-white text-[32px] leading-none">1</p>
              <p className="font-monument text-white text-[20px] leading-none">Tahun</p>
              <p className="font-poppins font-bold text-white text-[14px] text-center mt-1">Paket Tahunan</p>
            </div>
          </div>

          {/* Desktop: Normal flex layout */}
          <div className="hidden md:flex justify-center space-x-8">
            {/* Annual Membership */}
            <div className="bg-white w-[200px] h-[226px] rounded-[20px] border-[3px] border-primary shadow-lg p-4 flex flex-col items-center justify-center">
              <img alt="Crown Icon" className="w-[49px] h-[49px] mb-4" src={chessPawn} />
              <p className="font-poppins font-bold text-primary text-[20px] text-center">Membership Tahunan</p>
            </div>

            {/* Weekly Rate */}
            <div className="bg-[#3e3e3e] w-[200px] h-[226px] rounded-[20px] border-[3px] border-white shadow-lg p-4 flex flex-col items-center justify-center">
              <img alt="Knight Icon" className="w-[49px] h-[49px] mb-2" src={chessKnight} />
              <p className="font-monument text-white text-[48px] leading-none">7</p>
              <p className="font-monument text-white text-[32px] leading-none">Hari</p>
              <p className="font-poppins font-bold text-white text-[20px] text-center mt-2">Paket Mingguan</p>
            </div>

            {/* Monthly Rate */}
            <div className="bg-[#77749b] w-[200px] h-[226px] rounded-[20px] border-[3px] border-white shadow-lg p-4 flex flex-col items-center justify-center">
              <img alt="Bishop Icon" className="w-[49px] h-[49px] mb-2" src={chessBishop} />
              <p className="font-monument text-white text-[48px] leading-none">1</p>
              <p className="font-monument text-white text-[32px] leading-none">Bulan</p>
              <p className="font-poppins font-bold text-white text-[20px] text-center mt-2">Paket Bulanan</p>
            </div>

            {/* Biannual Rate */}
            <div className="bg-[#332f64] w-[200px] h-[226px] rounded-[20px] border-[3px] border-white shadow-lg p-4 flex flex-col items-center justify-center">
              <img alt="King Icon" className="w-[49px] h-[49px] mb-2" src={chessKing} />
              <p className="font-monument text-white text-[48px] leading-none">6</p>
              <p className="font-monument text-white text-[30px] leading-none">Bulan</p>
              <p className="font-poppins font-bold text-white text-[20px] text-center mt-2">Paket 6 Bulan</p>
            </div>

            {/* Annual Rate */}
            <div className="bg-primary w-[200px] h-[226px] rounded-[20px] border-[3px] border-white shadow-lg p-4 flex flex-col items-center justify-center">
              <img alt="Crown Icon" className="w-[49px] h-[49px] mb-2" src={crownIcon} />
              <p className="font-monument text-white text-[48px] leading-none">1</p>
              <p className="font-monument text-white text-[32px] leading-none">Tahun</p>
              <p className="font-poppins font-bold text-white text-[20px] text-center mt-2">Paket Tahunan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="relative py-8 md:py-16 px-4 md:px-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2b2b2b] via-transparent to-transparent h-16" />
        <div className="relative z-10">
          <h2 className="font-monument text-white text-[24px] md:text-[40px] text-center tracking-[2px] md:tracking-[4px] underline mb-8 md:mb-16">
            PELATIH
          </h2>

          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden flex space-x-6 overflow-x-auto pb-4 px-4 scrollbar-hide">
            {/* Coach John */}
            <div className="bg-[#b8b3ec] w-[250px] h-[260px] flex-shrink-0 rounded-[30px] relative overflow-hidden">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img alt="Coach John" className="w-[120px] h-[120px] rounded-full object-cover" src={coachJohn} />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="font-monument text-primary text-[16px] tracking-[1.5px] underline">Pelatih John</p>
              </div>
            </div>

            {/* Coach Martell */}
            <div className="bg-[#b8b3ec] w-[250px] h-[260px] flex-shrink-0 rounded-[30px] relative overflow-hidden">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img alt="Coach Martell" className="w-[120px] h-[120px] rounded-full object-cover" src={coachMartell} />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="font-monument text-primary text-[16px] tracking-[1.5px] underline">Pelatih Martell</p>
              </div>
            </div>

            {/* Coach Ansel */}
            <div className="bg-[#b8b3ec] w-[250px] h-[260px] flex-shrink-0 rounded-[30px] relative overflow-hidden">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img alt="Coach Ansel" className="w-[120px] h-[120px] rounded-full object-cover" src={coachAnsel} />
              </div>
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="font-monument text-primary text-[16px] tracking-[1.5px] underline">Pelatih Ansel</p>
              </div>
            </div>
          </div>

          {/* Desktop: Normal flex layout */}
          <div className="hidden md:flex justify-center space-x-8">
            {/* Coach John */}
            <div className="bg-[#b8b3ec] w-[332px] h-[347px] rounded-[40px] relative overflow-hidden">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img alt="Coach John" className="w-[170px] h-[170px] rounded-full object-cover" src={coachJohn} />
              </div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="font-monument text-primary text-[20px] tracking-[2px] underline">Pelatih John</p>
              </div>
            </div>

            {/* Coach Martell */}
            <div className="bg-[#b8b3ec] w-[332px] h-[347px] rounded-[40px] relative overflow-hidden">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img alt="Coach Martell" className="w-[170px] h-[170px] rounded-full object-cover" src={coachMartell} />
              </div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="font-monument text-primary text-[20px] tracking-[2px] underline">Pelatih Martell</p>
              </div>
            </div>

            {/* Coach Ansel */}
            <div className="bg-[#b8b3ec] w-[332px] h-[347px] rounded-[40px] relative overflow-hidden">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <img alt="Coach Ansel" className="w-[170px] h-[170px] rounded-full object-cover" src={coachAnsel} />
              </div>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="font-monument text-primary text-[20px] tracking-[2px] underline">Pelatih Ansel</p>
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
            {/* Map */}
            <div className="w-full md:w-[390px] h-[250px] md:h-[532px] rounded-[20px] overflow-hidden mb-6 md:mb-0 md:mr-8">
              <img alt="Peta Lokasi S⭐R⭐Y Fitness Center - General Martha Villamor Air Base Pasay City" className="w-full h-full object-cover" src={locationMap} />
            </div>

            {/* Contact Information */}
            <div className="bg-[#3e3e3e] rounded-[20px] md:rounded-tr-[40px] p-4 md:p-8 flex-1">
              <div className="text-white">
                <p className="font-poppins text-[14px] md:text-[20px] mb-3 md:mb-4">
                  <span className="font-medium text-accent">Alamat:</span>
                  <span className="font-bold"> 12TH ST. GENERAL MATHA VILLAMOR AIR BASE PASAY CITY</span>
                </p>
                <p className="font-poppins text-[14px] md:text-[20px] mb-3 md:mb-4">
                  <span className="font-medium text-accent">Email:</span>
                  <span className="font-bold"> Martell008@yahoo.com</span>
                </p>
                <p className="font-poppins text-[14px] md:text-[20px] mb-6 md:mb-8">
                  <span className="font-medium text-accent">Nomor Kontak:</span>
                  <span className="font-bold"> 09260417050</span>
                </p>

                <p className="font-monument text-[#d3cfff] text-[18px] md:text-[24px] mb-3 md:mb-4">MEDIA SOSIAL KAMI:</p>
                <div className="flex space-x-3 md:space-x-4">
                  <img alt="Facebook" className="w-[35px] h-[35px] md:w-[47px] md:h-[47px]" src={facebookIcon} />
                  <img alt="Messenger" className="w-[35px] h-[35px] md:w-[47px] md:h-[47px]" src={messengerIcon} />
                  <img alt="Instagram" className="w-[35px] h-[35px] md:w-[47px] md:h-[47px]" src={instagramIcon} />
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
                <label className="font-poppins font-bold text-[#151515] text-[16px] md:text-[20px] block mb-2">Nama Belakang</label>
                <input type="text" className="bg-[#bcbcbc] h-[32px] md:h-[36px] rounded-full w-full px-4 outline-none text-sm md:text-base" />
              </div>
              <div>
                <label className="font-poppins font-bold text-[#151515] text-[16px] md:text-[20px] block mb-2">Nama Depan</label>
                <input type="text" className="bg-[#bcbcbc] h-[32px] md:h-[36px] rounded-full w-full px-4 outline-none text-sm md:text-base" />
              </div>
              <div>
                <label className="font-poppins font-bold text-[#151515] text-[16px] md:text-[20px] block mb-2">Email</label>
                <input type="email" className="bg-[#bcbcbc] h-[32px] md:h-[36px] rounded-full w-full px-4 outline-none text-sm md:text-base" />
              </div>
              <div>
                <label className="font-poppins font-bold text-[#151515] text-[16px] md:text-[20px] block mb-2">Telepon</label>
                <input type="tel" className="bg-[#bcbcbc] h-[32px] md:h-[36px] rounded-full w-full px-4 outline-none text-sm md:text-base" />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 md:mt-8">
              <button className="bg-[#deba3b] px-4 md:px-6 py-2 md:py-3 text-primary font-poppins font-bold text-[16px] md:text-[20px] rounded-full">
                Kirim
              </button>
              <button className="bg-cream px-4 md:px-6 py-2 md:py-3 text-[#2b2b2b] font-poppins font-bold text-[16px] md:text-[20px] rounded-full">
                Hapus Data
              </button>
            </div>
          </div>

          {/* Customer's Progress */}
          <div className="flex-1">
            <h3 className="font-monument text-[#deba3b] text-[24px] md:text-[40px] mb-6 md:mb-8 text-center lg:text-left">Progress Member</h3>
            
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
        <div className="flex flex-col sm:flex-row justify-between space-y-6 sm:space-y-0">
          <div>
            <h4 className="font-poppins font-bold text-[#151515] text-[18px] md:text-[20px] mb-3 md:mb-4">GYM</h4>
            <ul className="space-y-2 text-[14px] md:text-[15px] font-poppins font-semibold text-[#151515]">
              <li>Mengapa Bergabung</li>
              <li>Tentang</li>
              <li>Paket</li>
              <li>Pelatih</li>
              <li>Pertanyaan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-bold text-[#151515] text-[18px] md:text-[20px] mb-3 md:mb-4">MEMBER</h4>
            <ul className="space-y-2 text-[14px] md:text-[15px] font-poppins font-semibold text-[#151515]">
              <li>FAQ</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>
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