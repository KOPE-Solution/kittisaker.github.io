import Image from 'next/image'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "draft",
  description: "draft"
};

export default function Home() {

  return (
    <main className={styles.main}>
      <div className="sm:w-[70%] w-full h-full flex flex-col relative items-center">
        <Header />

        <div>
          <div className="w-full h-14 sm:mt-10 mt-6 flex items-center justify-center">
            <Link
              href="https://github.com/kittisaker"
              target="_blank"
            >
              <div className="py-2 px-3 text-sm transition-colors duration-200 text-[#4A5562] bg-white border rounded-full shadow-md border-[#D1D5DA] hover:bg-[#F3F4F6] flex items-center">
                <AiFillGithub className="text-xl mr-2" /> Star on GitHub
              </div>
            </Link>
          </div>
          <div className="w-full h-full flex flex-col items-center">
            <h1 className="md:text-6xl text-5xl sm:w-auto w-[280px] text-center text-slate-900 mt-10 font-bold 
            text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600
            ">
              ร่าง<br /> รับเขียนเว็บ และโมบายแอปพลิเคชัน
            </h1>

            <Link
              href="/posts"
            >
              <div className="py-2 px-8 mt-14 text-lg w-fit transition-colors duration-200 text-white bg-slate-800 border rounded-full shadow-md border-[#D1D5DA] hover:bg-slate-700 flex items-center">
                ไปยังบทความ <BsArrowRightShort className="text-3xl ml-1" />
              </div>
            </Link>
              <Link  target="__blank" href="https://discord.gg/xGn6pzVBmz" className="mt-6 underline text-sm">กดเข้าร่วมกลุ่มกับเราเพื่อติดต่อ? </Link>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
