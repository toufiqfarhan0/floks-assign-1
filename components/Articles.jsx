'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

function ArticleCard({ title, image }) {
  return (
    <Card className="overflow-hidden border border-[#93A2D361] rounded-[21px] h-[480px] flex flex-col max-w-[340px] mx-auto">
      <div className="h-52 relative p-4">
        <div className="w-full h-full rounded-3xl overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover p-3 rounded-3xl'
          />
        </div>
      </div>
      <CardContent className="p-5 flex-grow">
        <h3 className="text-lg font-semibold text-[#0E2368] mb-2">{title}</h3>
        <p className="text-[#444957] text-sm">
          PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...
        </p>
      </CardContent>
      <CardFooter className="p-5 flex justify-center">
        <Button variant="outline" className=" border-[#424961] text-[#424961] hover:bg-white/10 rounded-full px-6 text-sm">
          Read More
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Articles() {
  const [isMobile, setIsMobile] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 375)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const articles = [
    { title: "Grilled Tomatoes at Home", image: "/images/article1.png" },
    { title: "Snacks for Travel", image: "/images/article2.png" },
    { title: "Post-workout Recipes", image: "/images/article3.png" },
    { title: "How To Grill Corn", image: "/images/article4.png" },
    { title: "Crunchwrap Supreme", image: "/images/article5.png" },
    { title: "Broccoli Cheese Soup", image: "/images/article6.png" },
  ]

  const articlesPerPage = isMobile ? 1 : 3
  const totalPages = Math.ceil(articles.length / articlesPerPage)

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  const nextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages))
  const prevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0E2368] mb-12 text-start">
          Latest Articles
        </h2>
        <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-8 mb-8`}>
          {currentArticles.map((article, index) => (
            <ArticleCard key={index} title={article.title} image={article.image} />
          ))}
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button 
            onClick={prevPage} 
            disabled={currentPage === 1}
            className="bg-white text-[#424961] border border-[#424961] hover:bg-[#424961] hover:text-white"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
          </Button>
          <span className="text-[#424961]">
            {currentPage} of {totalPages}
          </span>
          <Button 
            onClick={nextPage} 
            disabled={currentPage === totalPages}
            className="bg-white text-[#424961] border border-[#424961] hover:bg-[#424961] hover:text-white"
          >
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}