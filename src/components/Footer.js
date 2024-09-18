import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="#"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Link
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Aman Bhakar
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;