'use client';

export function Footer() {
  return (
    <footer className="fixed bottom-5 w-full z-50">
      <div className="flex flex-row items-center gap-0.5 px-5 text-sm text-white">
        <p className="font-header text-xs tracking-wider uppercase mr-auto">&copy;Rough Draft Media {new Date().getFullYear()}. All rights reserved.</p>
        <a href="mailto:info@roughdraftmedia.com"><i className="bx bx-envelope mr-[5px] translate-y-[2px]"/></a>
        <a href="https://www.instagram.com/roughdraftseattle/"><i className="bx bxl-instagram mr-[5px] translate-y-[2px]"/></a>
        <a href="https://www.tiktok.com/@roughdraftmedia"><i className="bx bxl-tiktok mr-[5px] translate-y-[2px]"/></a>
        <a href="https://www.youtube.com/@canitellyousmthpodcast"><i className="bx bxl-youtube mr-[5px] translate-y-[2px]"/></a>
      </div>
    </footer>
  )
}