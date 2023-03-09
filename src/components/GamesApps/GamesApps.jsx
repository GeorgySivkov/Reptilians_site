import React from 'react'

export default function GamesApps() {
  return (
    <>
        <section className="section section-gameapps" id="gameapps">
    <h2 className="title">Our Games & Apps</h2>
    <div className="game">
        <div className="game-info">
            <p className="game-name">
                Reptilian game <span
                    className="game-version">ver 2.0 released</span>
            </p>
            <p className="game-description">
                Try playing the other way!<br/>
                What happens when you combine the dynamics of "bullet hell"
                style,
                energetic music, pixel art, and a look at the classic game from
                a
                different angle?<br/>
                Reptilian!<br/>
                You can dive into the world of Reptilian and take part in the
                conquest of the galaxy!<br/>
                A huge selection of weapons and buffs will allow you to create
                your
                game strategy from thousands of possible variations!<br/>
                Look at the classic 90s story from the other side of the lore of
                the
                game!
            </p>
            <div className="game-links">
                <a className="link"
                   href="https://play.google.com/store/apps/details?id=com.reptilians.reptilian"
                   target="_blank">Android</a>
            </div>
        </div>
        <div className="game-screenshot-wrapper">
            <img className="game-screenshot" src="assets/game1.png" alt="game1"/>
            <img className="game-border" src="assets/borderPhone.png" alt="game1"/>
        </div>
    </div>
    <div className="game">
        <div className="game-info">
            <p className="game-name">
                CatFall <span className="game-version">In progress</span>
            </p>
            <p className="game-description">
                Cats always land on their feet!<br/>
                We want to keep pixel art and energetic music from Reptilian to
                keep our style, and add more color and cute.<br/>
                Help little kitty avoid obstacles and collect fish to improve
                their
                skills.<br/>
                Design and development of the game are in progress.<br/>
                In stores soon!<br/>
                Text us in <a className="link"
                              href="https://discord.gg/CuPZU7KHQY"
                              target="_blank" style={{color: '#FDFF52'}}>
                Discord</a> to join as an alpha tester!<br/>
            </p>
        </div>
        <div className="game-screenshot-wrapper">
            <img className="game-border" src="assets/borderPhone.png" alt="game1"/>
            <img className="game-screenshot" src="assets/game2.png" alt="game1"/>
        </div>
    </div>
    <div className="game">
        <div className="game-info">
            <p className="game-name">
                Mind Health app <span className="game-version">In progress</span>
            </p>
            <p className="game-description">
                We have an idea for an app that will help you understand
                yourself
                better, track and analyze emotions, and get help from other
                people.<br/>
                It is in research and if you want to be a participant in the
                development - contact us!<br/>
                Text us in <a className="link"
                              href="https://discord.gg/CuPZU7KHQY"
                              target="_blank" style={{color: "#FDFF52"}}>
                Discord</a> to join as an alpha tester!<br/>
            </p>
        </div>
        <div className="game-screenshot-wrapper">
            <img className="game-screenshot" src="assets/game3.png" alt="game1"/>
            <img className="game-border" src="assets/borderPhone.png" alt="game1"/>
        </div>
    </div>
</section>
    
    </>
  )
}
