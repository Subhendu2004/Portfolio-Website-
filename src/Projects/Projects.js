import React, { useRef, useState } from 'react'
import { works } from '../Info/Info'
import { FaGithub } from "react-icons/fa"
import { BsFillBookmarkHeartFill } from "react-icons/bs"
import './Projects.css'
import StarsCanvas from '../Stars/Stars'

export default function Projects() {

    const logoRef = useRef([])
    const [showPulse, setShowPulse] = useState(true)

    const cards = works.map((work, idx) => (
        <ProjectCard key={idx} props={work} logoRef={logoRef}
            idx={idx} pulse={pulse} pulseRemove={pulseRemove} />
    ))

    function pulse(idx) {
        if (showPulse) {
            logoRef.current.forEach(logo => logo.classList.remove('pulse'))
            logoRef.current[idx].classList.add('pulse')
        }
    }

    function pulseRemove(event) {
        event.stopPropagation()
        logoRef.current.forEach(logo => logo.classList.remove('pulse'))
        setShowPulse(false)
    }

    return (
        <div className='projects-container'>
            <StarsCanvas style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, zIndex: 0 }} />
            <h1>PROJECTS</h1>
            <div className="projects-wrapper">{cards}</div>
        </div>
    )
}

function ProjectCard({ props, logoRef, idx, pulse, pulseRemove }) {
    const tags = props.tags.map((tag, idx) => (
        <span key={idx} style={{ '--tag-color': tag.color }}>#{tag.tech}</span>
    ))

    return (
        <div className='project-card' onClick={() => pulse(idx)}>
            <div className='image-div'>
                <img className='project-img' src={props.image} alt={props.title} />
                <a className='logo' href={props.project_link} target='_blank' aria-label={props.title}
                    ref={el => logoRef.current[idx] = el} onClick={pulseRemove} rel='noreferrer'>
                    {props.logo}
                </a>
                <a className='github' href={props.code_link} target='_blank' aria-label={props.title}
                    rel='noreferrer'>
                    <FaGithub />
                </a>
            </div>
            <h2>{props.title}{props.must_view && <BsFillBookmarkHeartFill />}</h2>
            <p>{props.description}</p>
            <div className='tags'>{tags}</div>
        </div>
    )
}
