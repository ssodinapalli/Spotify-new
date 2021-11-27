import React from 'react'
// import '../assests/css/Landingpage.css';
// import '../assests/Js/jquery-1.11.3.min.js';

function Landingpage() {
	return (
		<>
			<div class="wrap">
				<div class="list-area">
					<div class="side">
						<div class="side__wrap side__nav">
							<ul class="nav">
								<li class="nav__list">
									<i class="nav__icon fas fa-home"></i>
									<p class="nav__text">Home</p>
								</li>
								<li class="nav__list">
									<i class="nav__icon far fa-compass"></i>
									<p class="nav__text">Browse</p>
								</li>
								<li class="nav__list">
									<i class="nav__icon fas fa-broadcast-tower"></i>
									<p class="nav__text">Radio</p>
								</li>
							</ul>
						</div>
						<div class="side__wrap side__contents">
							<ul class="contents">
								<li class="contents__title">YOUR LIBRARY</li>
								<li>
									<ul class="contents__box">
										<li class="contents__list">Made For You</li>
										<li class="contents__list">Recently Played</li>
										<li class="contents__list">Liked Songs</li>
										<li class="contents__list">Albums</li>
										<li class="contents__list">Artists</li>
										<li class="contents__list">Podcasts</li>
									</ul>
								</li>
							</ul>
							<ul class="contents">
								<li class="contents__title">PLAYLISTS</li>
								<li>
									<ul class="contents__box">
										<li class="contents__list on">Discover Weekly</li>
										<li class="contents__list">Just Good Music</li>
										<li class="contents__list">Soul 'n' the City</li>
										<li class="contents__list">Today's Top Hit</li>
										<li class="contents__list">Jazz Rap</li>
										<li class="contents__list">All Funked Up</li>
										<li class="contents__list">Mood Booster</li>
										<li class="contents__list">Are &amp; Be</li>
										<li class="contents__list">Hit Rewind</li>
										<li class="contents__list">Next Wave Neo-Soul</li>
										<li class="contents__list">Spotify &amp; Chill</li>
										<li class="contents__list">The New Alt</li>
										<li class="contents__list">Singled Out</li>
										<li class="contents__list">Liked from Radio</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="side__wrap side__new-list">
							<div class="new-list">
								<i class="new-list__icon far fa-times-circle"></i>
								<p class="new-list__text">New Playlist</p>
							</div>
						</div>
					</div>
					<div class="main">
						<div class="main__wrap top-scroll-bg"></div>
						<div class="main__wrap top-bar">
							<ul class="top-bar__left top-bar__wrap">
								<li><i class="top-bar__icon fas fa-chevron-left"></i></li>
								<li><i class="top-bar__icon fas fa-chevron-right"></i></li>
								<li class="top-bar__search">
									<i class="top-bar__search--icon top-bar__icon fas fa-search"></i>
									<input type="text" class="top-bar__search--input" placeholder="Search" />
								</li>
							</ul>
							<ul class="top-bar__right top-bar__wrap">
								<li><i class="top-bar__icon top-bar__right--user-icon far fa-user-circle"></i></li>
								<li>Kelly</li>
								<li><i class="fas fa-chevron-down"></i></li>
							</ul>
						</div>
						<div class="main__wrap summary">
							<div class="summary__img"></div>
							<div class="summary__box">
								<div class="summary__text">
									<ul>
										<li>
											<span class="summary__text--white summary__text--for-me">MADE FOR KELLY</span>
										</li>
										<li>
											<strong class="summary__text--title">Discover Weekly</strong>
										</li>
										<li>
											<p class="will-hidden">Your weekly mixtape of fresh music. Enjoy new discoveries and deep cuts chosen just for you. Updated every Monday, so save your favorites!</p>
										</li>
										<li class="summary__text--by-spotify">
											<p>Made for <span class="summary__text--white ">Kelly</span> by <span class="summary__text--white">Spotify</span> &bull; 30 songs, 1 hr 49 min
											</p>
										</li>
									</ul>
								</div>
								<div class="summary__button">
									<ul class="button">
										<li class="button__list button__play-btn">
											<p class="button__text">PLAY</p>
										</li>
										<li class="button__list"><i class="button__icon far fa-heart"></i></li>
										<li class="button__list"><i class="button__icon fas fa-ellipsis-h"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="main__wrap summary on">
							<div class="summary__img"></div>
							<div class="summary__box">
								<div class="summary__text">
									<ul>
										<li>
											<strong class="summary__text--title">Discover Weekly</strong>
										</li>
									</ul>
								</div>
								<div class="summary__button">
									<ul class="button">
										<li class="button__list button__play-btn">
											<p class="button__text">PLAY</p>
										</li>
										<li class="button__list"><i class="button__icon far fa-heart"></i></li>
										<li class="button__list"><i class="button__icon fas fa-ellipsis-h"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="main__wrap">
							<table class="playlist" />
							<colgroup />
							<col width="3%" />
							<col width="3%" />
							<col width="35%" />
							<col width="23%" />
							<col width="23%" />
							<col width="7%" />
							<col width="3%" />
							<col width="3%"/>

								<tr class="playlist__tr">
									<th class="playlist__th"></th>
									<th class="playlist__th"></th>
									<th class="playlist__th">TITLE</th>
									<th class="playlist__th">ARTIST</th>
									<th class="playlist__th">ALBUM</th>
									<th class="playlist__th"><i class="far fa-calendar-alt"></i></th>
									<th class="playlist__th"></th>
									<th class="playlist__th"></th>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Honey</td>
									<td class="playlist__td playlist__td--artist">The Motel Brothers, Katie Buxton</td>
									<td class="playlist__td playlist__td--album">Honey</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Can't Complain</td>
									<td class="playlist__td playlist__td--artist">Dog Ear</td>
									<td class="playlist__td playlist__td--album">Where We Left Off</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Better</td>
									<td class="playlist__td playlist__td--artist">corto.alto, kitti</td>
									<td class="playlist__td playlist__td--album">Live from 435, Vol.1</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr>
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Man up And Create</td>
									<td class="playlist__td playlist__td--artist">Melle Jutte</td>
									<td class="playlist__td playlist__td--album">Man up And Create</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Belladonna</td>
									<td class="playlist__td playlist__td--artist">Armando Young</td>
									<td class="playlist__td playlist__td--album">Belladonna</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr nowplay">
									<td class="playlist__td playlist__td--volum"><i class="fas fa-volume-up"></i></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Morning Sun</td>
									<td class="playlist__td playlist__td--artist">Emile Almira, Lizzie Statham</td>
									<td class="playlist__td playlist__td--album">Morning Sun</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Cruisin'</td>
									<td class="playlist__td playlist__td--artist">Quincy Mumford</td>
									<td class="playlist__td playlist__td--album">Cruisin'</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">The Power</td>
									<td class="playlist__td playlist__td--artist">Hugo Cottu, Loria Boban</td>
									<td class="playlist__td playlist__td--album">The Power</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Too Rare To Die</td>
									<td class="playlist__td playlist__td--artist">Joe Beard, Rosier</td>
									<td class="playlist__td playlist__td--album">Comfort Zone</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Loving' You Is Easy</td>
									<td class="playlist__td playlist__td--artist">Vanmiran</td>
									<td class="playlist__td playlist__td--album">Loving' You Is Easy</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Buttermilk</td>
									<td class="playlist__td playlist__td--artist">Bear Diako, emawk</td>
									<td class="playlist__td playlist__td--album">Buttermilk</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Gold Plated</td>
									<td class="playlist__td playlist__td--artist">Odette Peters, PYJAEN</td>
									<td class="playlist__td playlist__td--album">Gold Plated</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Presents</td>
									<td class="playlist__td playlist__td--artist">Uzahan, Ash Lam</td>
									<td class="playlist__td playlist__td--album">Presents</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Tryna Make Sense</td>
									<td class="playlist__td playlist__td--artist">Madeline Edwards</td>
									<td class="playlist__td playlist__td--album">Tryna Make Sense</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Borders</td>
									<td class="playlist__td playlist__td--artist">Tawiah</td>
									<td class="playlist__td playlist__td--album">Starts Again</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Lately</td>
									<td class="playlist__td playlist__td--artist">Miller Blue</td>
									<td class="playlist__td playlist__td--album">Cotton</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Kumbaya</td>
									<td class="playlist__td playlist__td--artist">Nick Dorian, Shibo</td>
									<td class="playlist__td playlist__td--album">Kumbaya</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Daydream</td>
									<td class="playlist__td playlist__td--artist">Snacks</td>
									<td class="playlist__td playlist__td--album">Nobody Else EP</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Peace of Mind</td>
									<td class="playlist__td playlist__td--artist">Walker</td>
									<td class="playlist__td playlist__td--album">My Own Best Friend / Peace of Mind</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Calypso</td>
									<td class="playlist__td playlist__td--artist">Jackson Lundy</td>
									<td class="playlist__td playlist__td--album">Calypso</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Middle</td>
									<td class="playlist__td playlist__td--artist">Adeline</td>
									<td class="playlist__td playlist__td--album">Middle</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Ma Suz</td>
									<td class="playlist__td playlist__td--artist">Mohammad Zhang, SpaceBuddha</td>
									<td class="playlist__td playlist__td--album">Allstars #1</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Cosmic Dust - Thelonious Coltrane Remix</td>
									<td class="playlist__td playlist__td--artist">Kasia Konstance, Thelonious Coltrane</td>
									<td class="playlist__td playlist__td--album">Cosmic Dust Remix</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Otherside - Two Another Remix</td>
									<td class="playlist__td playlist__td--artist">Young France, Reva DeVito, Golden Vessel</td>
									<td class="playlist__td playlist__td--album">Otherside (Remixes)</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">A Happy Song</td>
									<td class="playlist__td playlist__td--artist">Funkmammoth</td>
									<td class="playlist__td playlist__td--album">A Happy Song</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Feathers</td>
									<td class="playlist__td playlist__td--artist">Feiertag, Pip Millett</td>
									<td class="playlist__td playlist__td--album">Virtues</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Is Magic Gone</td>
									<td class="playlist__td playlist__td--artist">FKJ</td>
									<td class="playlist__td playlist__td--album">Is Magic Gone</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Back UP</td>
									<td class="playlist__td playlist__td--artist">nimino, Harrison Mayo</td>
									<td class="playlist__td playlist__td--album">Back UP</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Little Big Brother</td>
									<td class="playlist__td playlist__td--artist">Rob de Boer</td>
									<td class="playlist__td playlist__td--album">Little Big Brother</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>
								<tr class="playlist__tr">
									<td class="playlist__td playlist__td--play"></td>
									<td class="playlist__td playlist__td--like"></td>
									<td class="playlist__td playlist__td--title">Nothing Else! (Live Remix)</td>
									<td class="playlist__td playlist__td--artist">Jamie Lidell, Muru Masa</td>
									<td class="playlist__td playlist__td--album">Nothing Else! (Live Remix)</td>
									<td class="playlist__td playlist__td--hour"></td>
									<td class="playlist__td playlist__td--dislike"></td>
									<td class="playlist__td playlist__td--more"></td>
								</tr>


						</div>
					</div>
				</div>
			</div>
	

                                                <div class="playbar">
                                                    <div class="album-cover">
                                                        <div class="album-cover__img"></div>
                                                        <div class="album-cover__text-box">
                                                            <div class="album-cover__wrap">
                                                                <p class="album-cover__title">Morning Sun</p>
                                                                <div class="album-cover__icon-box">
                                                                    <i class="album-cover__icon far fa-heart"></i>
                                                                    <i class="album-cover__icon fas fa-ban"></i>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p class="album-cover__artist">Emile Almira, Lizzie Statham</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="play-btns">
                                                        <ul class="play-btns__wrap play-btns__icon-box">
                                                            <li class="play-btns__list"><i class="play-btns__icon fas fa-random"></i></li>
                                                            <li class="play-btns__list"><i class="play-btns__icon fas fa-step-backward"></i></li>
                                                            <li class="play-btns__list"><i class="play-btns__icon far fa-play-circle"></i></li>
                                                            <li class="play-btns__list"><i class="play-btns__icon fas fa-step-forward"></i></li>
                                                            <li class="play-btns__list"><i class="play-btns__icon fas fa-sync"></i></li>
                                                        </ul>
                                                        <ul class="play-btns__wrap play-btns__range-bar">
                                                            <li>
                                                                <p>2:03</p>
                                                            </li>
                                                            <li class="play-btns__bar">
                                                                <div>
                                                                    <input type="range" value="60" min="0" max="100"/>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <p>3:52</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div class="ect-btns">
                                                        <ul class="ect-btns__inner">
                                                            <li class="ect-btns__list"><i class="ect-btns__icon fas fa-list"></i></li>
                                                            <li class="ect-btns__list"><i class="ect-btns__icon fas fa-mobile-alt"></i></li>
                                                            <li class="ect-btns__list ect-btns__list--volume">
                                                                <i class="ect-btns__icon fas fa-volume-up"></i>
                                                                <div class="ect-btns__bar">
                                                                    <input type="range" value="100" min="0" max="100"/>
                                                                </div>
                                                            </li>
                                                            <li class="ect-btns__list"><i class="ect-btns__icon fas fa-expand-alt"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                            <div class="js-modal">
                                                <div class="bg-area"></div>
                                                <div class="modal">
                                                    <div>
                                                        <h1 class="modal__title">Create Playlist</h1>
                                                        <i class="modal__close-btn fas fa-times"></i>
                                                    </div>
                                                    <div class="modal__contents">
                                                        <div class="modal__image">
                                                            <div class="modal__image--box">
                                                                <i class="modal__image--icon fab fa-itunes-note"></i>
                                                                <p>Choose image</p>
                                                            </div>
                                                        </div>
                                                        <div class="modal__text-box">
                                                            <div class="modal__name">
                                                                <p class="modal__text">Name</p>
                                                                <input type="text" class="modal__text-input" placeholder="My playlist #8"/>
                                                            </div>
                                                            <div>
                                                                <p class="modal__text">Description</p>
                                                                <textarea class="modal__text-area" placeholder="Give your playlist a catchy description."></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal__btn">
                                                        <p class="modal__btn--text">CREATE</p>
                                                    </div>
                                                </div>
                                            </div>
            
        </>
    )
}

export default Landingpage;
