import { useState } from 'react'
import dots from './assets/dots.svg'
import kodeCampLogo from './assets/logo.svg'
import kodeHauzIcon from './assets/KodeHauz.svg'
import profileImg from './assets/profile_img.png'
import gitHub from './assets/github.svg'
import share from './assets/share.svg'
import slack from './assets/slack.svg'
import './App.css'

function App() {

  return (
    <>
        <section class="parent-wrapper">
        <div class="dots-div">
                <img src={dots} class="dot-icon">
                <img src={share} alt="share-icon" class="share-icon">
            </div>
        <div class="container">
            <div class="imgdiv">
                <img src={profileImg}>
                <h1>John Doe</h1>
            </div>
            <div class="links-wrapper">
                <div class="link-content">
                    <a href="#" target="_blank">Twitter Link</a>
                </div>
                <div class="link-content">
                    <a href="#" target="_blank">Kodecamp Team</a>
                </div>
                <div class="link-content">
                    <a href="#" target="_blank">Kodecamp Books</a>
                </div>
                <div class="link-content">
                    <a href="#" target="_blank">Python Books</a>
                </div>
                <div class="link-content">
                    <a href="#" target="_blank">Background Check For Coders</a>
                </div>
            </div>
            <div class="social-icons">
                <img src={slack} class="img-slack">
                <img src={gitHub}>
            </div>
            <hr>
        </div>
        <div class="kodecamp-assets">
            <div class="kodecamp-assets-img">
                <img src={logo} alt="kodecamp logo">
            </div>
            <p>KodeCamp Internship Task</p>
            <div class="kodecamp-assets-img kodecamp-assets-img2">
                <img src={kodeHauzIcon} alt="kodecamp logo">
            </div>
        </div>
    </section>
    </>
  )
}

export default App
