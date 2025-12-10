"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaMedium, FaExternalLinkAlt } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BlogPost {
  title: string;
  description: string;
  link: string;
  date: string;
  readTime: string;
  image: string;
}

export default function BlogPosts() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - clientWidth
            : scrollLeft + clientWidth,
        behavior: "smooth",
      });
    }
  };

  const posts: BlogPost[] = [
    {
      title: "Understanding JWT Authentication with a Mini Node.js API",
      description:
        "A comprehensive guide to implementing JWT authentication in Node.js, covering token generation, validation, and best practices for secure API development.",
      link: "https://medium.com/@0502mnkolombage/understanding-jwt-authentication-with-a-mini-node-js-api-7816f9aadb42",
      date: "2024",
      readTime: "8 min read",
      image: "/jwt-auth-demo.jpg",
    },
    {
      title:
        "How My LinkedIn Got Hacked Despite 2FA (And How You Can Protect Yours)",
      description:
        "A real-world account of a LinkedIn security breach and practical steps you can take to better protect your professional accounts from similar attacks.",
      link: "https://medium.com/@0502mnkolombage/how-my-linkedin-got-hacked-despite-2fa-and-how-you-can-protect-yours-0a9e292c5a06",
      date: "2024",
      readTime: "6 min read",
      image: "/linkedin-hacked-accounts.jpg",
    },
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent">
      <div className="max-w-[1440px] mx-auto px-6">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent text-center"
        >
          Blog Posts
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-12 flex items-center justify-center gap-2"
        >
          <FaMedium size={24} className="text-white" />
          Read my articles on Medium
        </motion.p>

        <div className="relative flex justify-center">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-600/80 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg hidden md:block"
            aria-label="Scroll Left"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-2 px-1"
            style={{ scrollBehavior: "smooth" }}
          >
            {posts.map((post, idx) => (
              <motion.a
                key={idx}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="min-w-[320px] max-w-sm flex-shrink-0 group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-2"
              >
                <div className="relative w-full h-48 overflow-hidden bg-gray-700">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <FaExternalLinkAlt
                      size={16}
                      className="text-gray-400 group-hover:text-indigo-400 transition-colors"
                    />
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-400 transition-colors">
                    {post.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-indigo-400 font-medium">
                    Read more
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-indigo-600/80 hover:bg-indigo-700 text-white p-2 rounded-full shadow-lg hidden md:block"
            aria-label="Scroll Right"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@0502mnkolombage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50"
          >
            <FaMedium size={20} />
            View All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
