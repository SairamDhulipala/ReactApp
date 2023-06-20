import React, { useEffect, useState } from 'react';
import './Tnc.css';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const Tnc = () => {
  const [markdownContent, setMarkdownContent] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { mdFile } = useParams();
  const navigate = useNavigate();
  const agreementName = getAgreementName(mdFile);

  useEffect(() => {
    const fetchMarkdownFile = async () => {
      try {
        const response = await axios.get(`http://192.168.56.1:55084/browser/mdfiles/${mdFile}.md`); //replace this with the link to minio
        setMarkdownContent(response.data);
      } catch (error) {
        console.error('Error fetching Markdown file:', error);
      }
    };

    fetchMarkdownFile();
  }, [mdFile]);

  const handleAccept = () => {
    if (accepted) {
      alert(`The agreement for ${agreementName} has been accepted.`);
      navigate('/welcome'); 
    }
  };

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function getAgreementName(file) {
    switch (file) {
      case 'a':
        return 'IBM';
      case 'b':
        return 'Amazon';
      case 'c':
        return 'Apple';
      default:
        return '';
    }
  }

  return (
    <div>
      <h1 className="title">Terms and conditions - {agreementName}</h1>
      <ReactMarkdown className="markdown">{markdownContent}</ReactMarkdown>

      <div className="button-alignment">
        <div className="checkbox-container">
          <label htmlFor="acceptCheckbox">
            <input
              type="checkbox"
              id="acceptCheckbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            Check the box to accept the T&C
          </label>
        </div>
        <div className="button-container">
          <button id="acceptButton" onClick={handleAccept} disabled={!accepted}>
            Accept T&C
          </button>
          <button id="goToTopButton" onClick={handleGoToTop}>
            Go to Top
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tnc;
