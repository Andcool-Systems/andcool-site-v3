import { useState } from "react";
import { Card3D } from "./card3d";
import styles_pr from "./styles/projects.module.css";
import LinkIcon from '@/app/static/link.svg';

interface ProjectProp {
    id: string;
    title: string;
    creation_date: string;
    icon: {
        url: string;
        color: string;
    };
    short_description: JSX.Element;
    full_description?: JSX.Element;
    links: {
        title: string;
        url: string;
    }[];
}

const Card = ({ project }: { project: ProjectProp }) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const links = project.links.map(link =>
        <a key={link.url} href={link.url} target="_blank" style={{ textDecoration: "none" }}>
            <div className={styles_pr.button}>
                <p>{link.title}</p>
                <LinkIcon />
            </div>
        </a>
    );

    return (
        <div className={styles_pr.child} id={project.id}>
            <div className={styles_pr.head}>
                <Card3D>
                    <img style={{ boxShadow: `${project.icon.color} 0px 0px 99px 9px` }} src={project.icon.url}></img>
                </Card3D>
                <div className={styles_pr.name}>
                    <h1 style={{ margin: 0, marginBottom: "3px" }}>{project.title}</h1>
                    <p style={{ margin: 0 }}>Начало разработки: {project.creation_date}</p>
                </div>
            </div>
            <div className={styles_pr.body}>
                <h1>Описание</h1>
                <p>{expanded ? <>{project.short_description}{project.full_description}</> : project.short_description}</p>
                {!!project.full_description && <button onClick={() => setExpanded(prev => !prev)}>{expanded ? 'Скрыть' : 'Ещё...'}</button>}
            </div>
            <div className={styles_pr.footer}>{links}</div>
        </div>
    )
}


export default Card;