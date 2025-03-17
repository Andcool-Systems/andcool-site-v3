import { JSX, useState } from 'react';
import { Card3D } from './card3d';
import styles_pr from './styles/projects.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { IconExternalLink } from '@tabler/icons-react';
import styles_main from './styles/page.module.css';

export interface ProjectProp {
    id: string;
    title: string;
    creation_date: string;
    tags: string[];
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
    const links = project.links.map(link => (
        <Link
            key={link.url}
            href={link.url}
            target="_blank"
            style={{ textDecoration: 'none' }}
        >
            <div className={`${styles_pr.button} ${styles_main.single}`}>
                <p>{link.title}</p>
                <IconExternalLink />
            </div>
        </Link>
    ));

    const tags = project.tags.map((tag, i) => (
        <span className={styles_pr.tag} key={i}>
            {tag}
        </span>
    ));

    return (
        <div className={styles_pr.child} id={project.id}>
            <div className={styles_pr.head}>
                <Card3D>
                    <Image
                        style={{
                            boxShadow: `${project.icon.color} 0px 0px 99px 9px`
                        }}
                        src={project.icon.url}
                        alt={project.id}
                        width={160}
                        height={160}
                    />
                </Card3D>
                <div className={styles_pr.name}>
                    <h1 style={{ margin: 0, marginBottom: '3px' }}>
                        {project.title}
                    </h1>
                    <p style={{ margin: 0 }}>
                        Начало разработки: {project.creation_date}
                    </p>
                    <div className={styles_pr.tags_cont}>{tags}</div>
                </div>
            </div>
            <div className={styles_pr.body}>
                <h1>Описание</h1>
                <p>
                    {expanded ? (
                        <>
                            {project.short_description}
                            <br />
                            <br />
                            {project.full_description}
                        </>
                    ) : (
                        project.short_description
                    )}
                </p>
                {!!project.full_description && (
                    <button onClick={() => setExpanded(prev => !prev)}>
                        {expanded ? 'Скрыть' : 'Ещё...'}
                    </button>
                )}
                <div className={styles_pr.footer}>{links}</div>
            </div>
        </div>
    );
};

export default Card;
