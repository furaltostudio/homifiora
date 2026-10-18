import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { portfolioProjects, Project } from '@/data/portfolioData';
import ProjectDetailClient from './ProjectDetailClient';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | HOMIFIORA',
    };
  }

  const projectUrl = `https://www.homifiora.com/projects/${project.slug}`;
  const keywords = [
    project.title,
    project.category,
    project.location,
    `${project.title} Architecture`,
    'HOMIFIORA',
    'Luxury Architecture India',
    ...project.keyHighlights,
  ];

  return {
    title: `${project.title} · ${project.category} (${project.year})`,
    description: `${project.tagline}. ${project.summary} Located in ${project.location}. Designed and authored by HOMIFIORA Architectural Atelier.`,
    keywords,
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      title: `${project.title} | HOMIFIORA Architectural Monograph`,
      description: project.summary,
      url: projectUrl,
      type: 'article',
      images: [
        {
          url: project.coverImage,
          width: 1536,
          height: 1024,
          alt: `${project.title} by HOMIFIORA`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | HOMIFIORA`,
      description: project.summary,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const currentIndex = portfolioProjects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const project = portfolioProjects[currentIndex];
  const prevProject =
    currentIndex > 0 ? portfolioProjects[currentIndex - 1] : portfolioProjects[portfolioProjects.length - 1];
  const nextProject =
    currentIndex < portfolioProjects.length - 1 ? portfolioProjects[currentIndex + 1] : portfolioProjects[0];

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VisualArtwork',
    name: project.title,
    alternateName: project.tagline,
    description: project.summary,
    creator: {
      '@type': 'Organization',
      name: 'HOMIFIORA Architectural Atelier',
      url: 'https://www.homifiora.com',
    },
    artMedium: 'Architecture & Interior Spatial Design',
    artform: project.category,
    image: `https://www.homifiora.com${project.coverImage}`,
    locationCreated: {
      '@type': 'Place',
      name: project.location,
    },
    dateCreated: project.year,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailClient
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </>
  );
}
