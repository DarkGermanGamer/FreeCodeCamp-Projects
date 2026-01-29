--
-- PostgreSQL database dump
--

-- Dumped from database version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)
-- Dumped by pg_dump version 12.22 (Ubuntu 12.22-0ubuntu0.20.04.4)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(50),
    age_in_millions_of_years integer,
    distance_from_earth integer,
    description text,
    has_life boolean NOT NULL,
    safe_to_visit boolean NOT NULL,
    personal_rating numeric(3,2)
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(50),
    age_in_millions_of_years integer,
    distance_from_earth integer,
    description text,
    has_life boolean NOT NULL,
    safe_to_visit boolean NOT NULL,
    personal_rating numeric(3,2),
    planet_id integer
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(50),
    age_in_millions_of_years integer,
    distance_from_earth integer,
    description text,
    has_life boolean NOT NULL,
    safe_to_visit boolean NOT NULL,
    personal_rating numeric(3,2),
    star_id integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: species; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.species (
    species_id integer NOT NULL,
    name character varying(50),
    planet_id integer NOT NULL
);


ALTER TABLE public.species OWNER TO freecodecamp;

--
-- Name: species_species_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.species_species_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.species_species_id_seq OWNER TO freecodecamp;

--
-- Name: species_species_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.species_species_id_seq OWNED BY public.species.species_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(50),
    age_in_millions_of_years integer,
    distance_from_earth integer,
    description text,
    has_life boolean NOT NULL,
    safe_to_visit boolean NOT NULL,
    personal_rating numeric(3,2),
    galaxy_id integer
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: species species_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.species ALTER COLUMN species_id SET DEFAULT nextval('public.species_species_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'Milky Way', 13500, 0, 'Not just a chocolate bar', true, true, 4.20);
INSERT INTO public.galaxy VALUES (2, 'Andromeda', 13000, 2500000, 'Our closest neighbour', false, true, 3.25);
INSERT INTO public.galaxy VALUES (3, 'Small Magellanic Cloud', NULL, 200000, 'The little brother', false, true, 2.00);
INSERT INTO public.galaxy VALUES (4, 'Large Magellanic Cloud', NULL, 160000, 'The big bro', false, true, 2.50);
INSERT INTO public.galaxy VALUES (5, 'Eye of Sauron', NULL, 52000000, 'It really exists', false, false, 4.00);
INSERT INTO public.galaxy VALUES (6, 'Fried Egg Galaxy', NULL, 72400000, 'Someone was really hungry naming this one', false, true, 4.05);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'Moon', NULL, NULL, 'Our closest companion', false, true, NULL, 3);
INSERT INTO public.moon VALUES (2, 'Phobos', NULL, NULL, NULL, false, true, NULL, 4);
INSERT INTO public.moon VALUES (3, 'Deimos', NULL, NULL, NULL, false, true, NULL, 4);
INSERT INTO public.moon VALUES (4, 'Io', NULL, NULL, NULL, false, true, NULL, 5);
INSERT INTO public.moon VALUES (5, 'Europa', NULL, NULL, NULL, false, true, NULL, 5);
INSERT INTO public.moon VALUES (6, 'Ganymede', NULL, NULL, NULL, false, true, NULL, 5);
INSERT INTO public.moon VALUES (7, 'Mimas', NULL, NULL, NULL, false, true, NULL, 6);
INSERT INTO public.moon VALUES (8, 'Enceladus', NULL, NULL, NULL, false, true, NULL, 6);
INSERT INTO public.moon VALUES (9, 'Tethys', NULL, NULL, NULL, false, true, NULL, 6);
INSERT INTO public.moon VALUES (10, 'Umbriel', NULL, NULL, NULL, false, true, NULL, 7);
INSERT INTO public.moon VALUES (11, 'Oberon', NULL, NULL, NULL, false, true, NULL, 7);
INSERT INTO public.moon VALUES (12, 'Titania', NULL, NULL, NULL, false, true, NULL, 7);
INSERT INTO public.moon VALUES (13, 'Triton', NULL, NULL, NULL, false, true, NULL, 8);
INSERT INTO public.moon VALUES (14, 'Nereid', NULL, NULL, NULL, false, true, NULL, 8);
INSERT INTO public.moon VALUES (15, 'Naiad', NULL, NULL, NULL, false, true, NULL, 8);
INSERT INTO public.moon VALUES (16, 'Charon', NULL, NULL, NULL, false, true, NULL, 9);
INSERT INTO public.moon VALUES (17, 'Nix', NULL, NULL, NULL, false, true, NULL, 9);
INSERT INTO public.moon VALUES (18, 'Hydra', NULL, NULL, NULL, false, true, NULL, 9);
INSERT INTO public.moon VALUES (19, 'Kerberos', NULL, NULL, NULL, false, true, NULL, 9);
INSERT INTO public.moon VALUES (20, 'Styx', NULL, NULL, NULL, false, true, NULL, 9);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'Mercury', NULL, NULL, 'Rest in Piece Freddie', false, false, NULL, 1);
INSERT INTO public.planet VALUES (2, 'Venus', NULL, NULL, 'Lovely planet', false, false, NULL, 1);
INSERT INTO public.planet VALUES (3, 'Earth', NULL, NULL, 'Home <3', true, true, NULL, 1);
INSERT INTO public.planet VALUES (4, 'Mars', NULL, NULL, 'Curiosity killed the cat and was exiled to Mars', false, false, NULL, 1);
INSERT INTO public.planet VALUES (5, 'Jupiter', NULL, NULL, 'The biggest in our solar system', false, false, NULL, 1);
INSERT INTO public.planet VALUES (6, 'Saturn', NULL, NULL, 'Proudly showing off his rings', false, false, NULL, 1);
INSERT INTO public.planet VALUES (7, 'Uranus', NULL, NULL, 'Will be renamed to Urectum in 2620 to stop immature jokes', false, false, NULL, 1);
INSERT INTO public.planet VALUES (8, 'Neptune', NULL, NULL, 'Farthest planet in our solar system', false, false, NULL, 1);
INSERT INTO public.planet VALUES (9, 'Pluto', NULL, NULL, 'Lost its planet status, but I felt bad not including it <3', false, false, NULL, 1);
INSERT INTO public.planet VALUES (10, 'Raxacoricofallapatorius', NULL, NULL, 'Twin planet of Clom', true, false, NULL, 6);
INSERT INTO public.planet VALUES (11, 'Melmac', NULL, NULL, 'Your cat will love it there', true, true, NULL, 6);
INSERT INTO public.planet VALUES (12, 'Tatooine', NULL, NULL, 'I dont lie sand...', true, true, NULL, 6);


--
-- Data for Name: species; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.species VALUES (1, 'Human', 3);
INSERT INTO public.species VALUES (2, 'Slitheen', 10);
INSERT INTO public.species VALUES (3, 'Cat', 11);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'Sun', 4600, 0, 'The brightest star in the sky', false, false, 4.50, 1);
INSERT INTO public.star VALUES (2, 'Proxima Centauri', 4850, 4, 'The 2nd closest one', false, true, 2.25, 1);
INSERT INTO public.star VALUES (3, 'Barnards star', 10000, 6, 'Named after Edward Emerson Barnard', false, false, 2.00, 1);
INSERT INTO public.star VALUES (4, 'Sirius', 242, 9, 'The brightest in the night sky', false, false, 3.50, 1);
INSERT INTO public.star VALUES (5, 'Wolf 359', 800, 8, 'I am running out of descriptions', false, false, 4.00, 1);
INSERT INTO public.star VALUES (6, 'Ross 128', 5000, 11, '...', false, false, 4.05, 1);


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 12, true);


--
-- Name: species_species_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.species_species_id_seq', 3, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: species species_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_name_key UNIQUE (name);


--
-- Name: species species_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_pkey PRIMARY KEY (species_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: moon moon_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet planet_star_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_star_id_fkey FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- Name: species species_planet_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.species
    ADD CONSTRAINT species_planet_id_fkey FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: star star_galaxy_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_galaxy_id_fkey FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- PostgreSQL database dump complete
--

