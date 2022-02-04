import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import './styles.css'

const RepositoryCard = styled.div`
  border-left: solid 2px ${props => props.color};
  background: #f4f4f4;
  width: 240px;
  height: 123px;
  padding: 20px;

  display: flex;
  justify-content: space-between;
`

export default function UserDetail() {
    const route = useParams();

    function handleLanguageColor(language) {
        const languageColor = {
            'javascript': '#FFF501',
            'java': '#A8855D',
            'typescript': '#01A4FF',
        }

        return languageColor[language]
    }

    return (
        <div>
            <div>
                <h1>Username</h1>
            </div>
            <div>
                <RepositoryCard color={() => handleLanguageColor('javascript')}>
                    <div className='infos-container'>
                        <label className='repo-name'>Repo name</label>
                        <span>Description</span>
                    </div>
                    <div className='infos-container'>
                        <span>Language</span>
                        <span>0 forks</span>
                        <span>0 issues</span>
                    </div>
                </RepositoryCard>
            </div>
        </div>
    )
}
