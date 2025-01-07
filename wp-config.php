<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'Zakra' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',CHA8LQXP8$EMY*C6W!f$BDte3AZ29jgkqj40_d4ig3Xs%[BAuA#X> qF;<[YM83' );
define( 'SECURE_AUTH_KEY',  ',a@HvOtxXg9)!y2UR0?d/MHjMGExJ$4ATpoOWJ^Bog AWiD/@+E6Wqk7n{@]1E6[' );
define( 'LOGGED_IN_KEY',    ']K<qlIJ$vtOpE8 n+4D&XwT@r5d2:=_%mCaeI^TC@tw,JvxhGON+|}pjle>JA,m$' );
define( 'NONCE_KEY',        'Z-YqW<s-sj8#XIK:tmVsIw3{%JT+,f ~TOm2-!)]Dw:q6*.|e7% U32ar~beUV?c' );
define( 'AUTH_SALT',        '77 )7f>:-$3Q.=.a>1j6u?5K5|s4ebK==.&;u)5QH%r6+Q2p;N*(Qg>TA)6:g0$z' );
define( 'SECURE_AUTH_SALT', '%tBVP,%1<y*K*|Go63V:h`mDQCu&GsZFANV^yIFSA]C7LJ~hQ]fPU6`k#+s$QM&V' );
define( 'LOGGED_IN_SALT',   'gu70;@1( GlMARc`F@4<b~pAc@=:cru&M8QQv6D#NA{meHa:%+;q>HmveIWVn{9H' );
define( 'NONCE_SALT',       '?27Urt<6WGk`I|}ybq)qI6k3 +tFC%gjp~;ffXhpI6^>Cg`;8&)k8,)y]J1wG[@3' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
