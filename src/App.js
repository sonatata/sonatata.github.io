import React, { useEffect } from 'react';

function App() {
    useEffect(() => {
        var colors = ['red', '#66f', 'green'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        document.getElementById('main').style.border = `2px solid ${random_color}`;
    }, []);

    return (
        <div className="container">
            <h2 className="header">hi! hi! hi!</h2>
            <div id="main">

                my name is <b>Sonata</b>.<br/>

                i'm a software developer based in <b>Toronto</b>.<br/>

                currently building things at <b>Ceridian</b>.<br/>

            </div>
            <h2 className="header" style={{textAlign:"right"}}>links! links! links!</h2>
            <div className="links">
                <a href="https://drive.google.com/open?id=1s5ih6o7vTPiPj7-eyA_iQF43THqPOehH">resume</a> {' 📄 '}
                <a href="mailto:me@sonatakatt.com">email</a> {' 📫 '}
                <a href="https://github.com/sonatata">github</a>{' 🐙 '}
                <a href="https://twitter.com/sonatakatt">twitter</a>{' 🐥 '}
                <a href="https://www.linkedin.com/in/sonata-katt-335598124/">linkedin</a>{' 💼 '}
            </div>
        </div>
    );
}
export default App;