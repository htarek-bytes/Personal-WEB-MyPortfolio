import React, { useContext, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import FilterBar from './FilterBar';
import { LanguageContext } from '../LanguageContext';

export default function Portfolio() {
    const { language } = useContext(LanguageContext);

    // Dynamic project list based on the current language
    const getAllProjects = () => [
        {
            title: language === 'en'
                ? 'Smart Waitroom Management System'
                : 'Gestion intelligente de salle d’attente',
            description: language === 'en'
                ? 'A web app to manage clinic and hospital waitrooms: view real-time wait times, patient flow, and receive alerts when it’s your turn.'
                : 'Une application web pour gérer les salles d’attente en clinique ou hôpital : visualisation en temps réel, suivi patient, alertes personnalisées.',
            techs: ['Java', 'Spring Boot', 'PostgreSQL', 'Leaflet.js', 'HTMX'],
            videoLink: 'https://www.youtube.com/watch?v=IZZnpzCg5Fw',
            features: language === 'en'
                ? [
                    'Live hospital map with estimated wait times',
                    'Patient registration and SMS alerts',
                    'Admin interface for staff',
                    'Severity-based triage'
                ]
                : [
                    'Carte interactive des hôpitaux avec temps d’attente estimés',
                    'Inscription des patients et alertes par SMS',
                    'Interface admin pour le personnel',
                    'Triage basé sur la sévérité'
                ],
        },

        {
            title: language === 'en' ? 'Ma Ville - Work Management App' : 'Ma Ville - Application de Gestion des Travaux',
            description: language === 'en'
                ? 'Innovative application developed in Java to streamline public and private work management in Montreal.'
                : 'Application innovante développée en Java pour simplifier la gestion des travaux publics et privés à Montréal.',
            techs: ['Java', 'Quarkus', 'PostgreSQL', 'Docker'],
            videoLink: 'https://www.youtube.com/watch?v=QNfzv0DQ20c',
            features: language === 'en'
                ? ['Notifications', 'Resident and Contractor Access', 'Work Planning']
                : ['Notifications', 'Accès Résident et Intervenant', 'Planification des Travaux'],
        },
        {
            title: 'VHDL Logic Circuits',
            description: language === 'en'
                ? 'VHDL implementations for combinational and sequential logic circuits.'
                : 'Implémentations en VHDL pour des circuits logiques combinatoires et séquentiels.',
            techs: ['VHDL', 'Quartus', 'Moore FSM'],
            videoLink: null,
            features: language === 'en'
                ? ['4-bit to 8-bit BCD Converter', 'Moore FSM for Sequence Detection']
                : ['Convertisseur de 4 bits à 8 bits BCD', 'FSM Moore pour la Détection de Séquences'],
        },
        {
            title: language === 'en' ? 'Magic Square MIPS' : 'Carré Magique MIPS',
            description: language === 'en'
                ? 'An assembly program to check if a 4x4 matrix filled with numbers 1-16 is a magic square.'
                : 'Un programme assembleur pour vérifier si une matrice 4x4 remplie de nombres 1-16 est un carré magique.',
            techs: ['MIPS', 'Assembly', 'Low-Level Programming'],
            videoLink: null,
            features: language === 'en'
                ? [
                    'Validates 4x4 magic square properties',
                    'Hands-on low-level programming',
                    'Focus on arrays and algorithms',
                ]
                : [
                    'Valide les propriétés des carrés magiques 4x4',
                    'Programmation de bas niveau pratique',
                    'Focus sur les tableaux et algorithmes',
                ],
        },
        {
            title: 'UdeM-IFT2015-TP1: Sudoku Solver',
            description: language === 'en'
                ? 'A Java application that solves 9x9 Sudoku puzzles by following the standard rules.'
                : 'Une application Java qui résout les puzzles Sudoku 9x9 en suivant les règles standards.',
            techs: ['Java', 'Object-Oriented Programming', 'Data Structures'],
            videoLink: null,
            features: language === 'en'
                ? [
                    'Solves multiple Sudoku puzzles',
                    'Detects invalid inputs',
                    'Ensures compliance with Sudoku rules',
                ]
                : [
                    'Résout plusieurs puzzles Sudoku',
                    'Détecte les entrées invalides',
                    'Assure la conformité avec les règles du Sudoku',
                ],
        },
    ];

    const [filteredProjects, setFilteredProjects] = useState(getAllProjects());

    // Update filtered projects when the language changes
    useEffect(() => {
        setFilteredProjects(getAllProjects());
    }, [language]);

    const handleFilterChange = (filter) => {
        if (filter === 'All') {
            setFilteredProjects(getAllProjects());
        } else {
            setFilteredProjects(getAllProjects().filter(project => project.techs.includes(filter)));
        }
    };

    return (
        <section id="portfolio" className="py-20 spaceBlack  text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold mb-10 text-center glow animate-neonPulse">
                    {language === 'en' ? 'My Projects' : 'Mes Projets'}
                </h2>
                <FilterBar onFilterChange={handleFilterChange} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} language={language} />
                    ))}
                </div>
            </div>
        </section>
    );
}
