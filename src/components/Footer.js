import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="container">
                    <a
                        href="https://github.com/gitaman69/e-commerce"
                        className="repo_link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github Link
                    </a>

                    <p>
                        Built by | &nbsp;
                        <a
                            href="e-commerce-gamma-snowy.vercel.app"
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