import React from 'react';
import classes from './Nav.module.css';
import { AppConsumer } from '../State/context';
import { Link } from 'react-router-dom';
import home_icon from '../Media/V_Logomark_White.png';

const Nav = () => {
	return (
		<AppConsumer>
			{(value) => (
				<div className={classes.container}>
					<ul className={classes.nav_buttons}>
						<li>
							<Link to={'/'}>
								<img src={home_icon} />
							</Link>
						</li>
						<li>
							<div className={classes.dropdown}>
								<button className={classes.dropbtn}>Maps</button>
								<div className={classes.dropdowncontent}>
									<Link className={classes.link}  to={'/bind'}>
										<h1>Bind</h1>
									</Link>
									<Link
										className={classes.link}
										to={'/haven'}
									>
										<h1>Haven</h1>
									</Link>
									<Link
										className={classes.link}
						
										to={'/split'}
									>
										<h1>Split</h1>
									</Link>
								</div>
							</div>
						</li>
					</ul>
				</div>
			)}
		</AppConsumer>
	);
};

export default Nav;