import React from "react";
import Link from 'next/link';

export default function Header({ container }) {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link href="/"><a class="navbar-brand" href="#">Student Leadership Club</a></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mb-2 mb-lg-0  ms-auto">
                        <li class="nav-item">
                            <Link href="/about">
                            <a class="nav-link active" aria-current="page" href="header">About</a>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">KSB Calendar</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Events
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Business Matters</a></li>
                                <li><a class="dropdown-item" href="#">KSB Summit</a></li>
                                <li><a class="dropdown-item" href="#">Learn More</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Our Community
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Our Team</a></li>
                                <li><a class="dropdown-item" href="#">KSB Clubs</a></li>
                                <li><a class="dropdown-item" href="#">Contact Us</a></li>
                            </ul>
                        </li>
                        <li className="btn btn-outline-success mr-5">Subscribe Us</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}