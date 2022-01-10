--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

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
-- Name: doctor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctor (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    username character varying,
    password character varying,
    unique_doctor_number character varying
);


ALTER TABLE public.doctor OWNER TO postgres;

--
-- Name: doctor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctor_id_seq OWNER TO postgres;

--
-- Name: doctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;


--
-- Name: doctors_specialists; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctors_specialists (
    id integer NOT NULL,
    doctor_type character varying
);


ALTER TABLE public.doctors_specialists OWNER TO postgres;

--
-- Name: doctors_specialists_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctors_specialists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctors_specialists_id_seq OWNER TO postgres;

--
-- Name: doctors_specialists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctors_specialists_id_seq OWNED BY public.doctors_specialists.id;


--
-- Name: gender; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gender (
    id integer NOT NULL,
    gender_type character varying
);


ALTER TABLE public.gender OWNER TO postgres;

--
-- Name: gender_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gender_id_seq OWNER TO postgres;

--
-- Name: gender_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gender_id_seq OWNED BY public.gender.id;


--
-- Name: medical_referral; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.medical_referral (
    id integer NOT NULL,
    doctors_specialists_id integer,
    comment character varying,
    unique_referral_number character varying,
    date character varying,
    doctor_id integer,
    patient_id integer
);


ALTER TABLE public.medical_referral OWNER TO postgres;

--
-- Name: medical_referral_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.medical_referral_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.medical_referral_id_seq OWNER TO postgres;

--
-- Name: medical_referral_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.medical_referral_id_seq OWNED BY public.medical_referral.id;


--
-- Name: patient; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.patient (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    egn character varying NOT NULL,
    address character varying,
    phone character varying,
    birth_date character varying,
    age integer,
    gender_id integer,
    additional_info character varying,
    doctor_id integer
);


ALTER TABLE public.patient OWNER TO postgres;

--
-- Name: patient_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.patient_id_seq OWNER TO postgres;

--
-- Name: patient_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.patient_id_seq OWNED BY public.patient.id;


--
-- Name: prescription; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prescription (
    id integer NOT NULL,
    medicine character varying,
    comment character varying,
    date character varying,
    unique_prescription_number character varying,
    doctor_id integer,
    patient_id integer,
    results character varying
);


ALTER TABLE public.prescription OWNER TO postgres;

--
-- Name: prescription_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prescription_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prescription_id_seq OWNER TO postgres;

--
-- Name: prescription_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prescription_id_seq OWNED BY public.prescription.id;


--
-- Name: doctor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);


--
-- Name: doctors_specialists id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors_specialists ALTER COLUMN id SET DEFAULT nextval('public.doctors_specialists_id_seq'::regclass);


--
-- Name: gender id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gender ALTER COLUMN id SET DEFAULT nextval('public.gender_id_seq'::regclass);


--
-- Name: medical_referral id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_referral ALTER COLUMN id SET DEFAULT nextval('public.medical_referral_id_seq'::regclass);


--
-- Name: patient id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patient ALTER COLUMN id SET DEFAULT nextval('public.patient_id_seq'::regclass);


--
-- Name: prescription id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prescription ALTER COLUMN id SET DEFAULT nextval('public.prescription_id_seq'::regclass);


--
-- Data for Name: doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctor (id, first_name, last_name, username, password, unique_doctor_number) FROM stdin;
3	Вяра	Паскова	vp	$2a$10$8BSwNuVCBhwLlofniFdEPuQ8F3nFqpornh5qLyHpN.d5J8kBFX8LO	607b5e7c-47b1-44b4-b588-4b8fef695b25
4	Teodor	Stanishev	teodor.stanishev	$2a$10$eLAErUPxxarYdpB53eyicuQ46vXCkxlH0xskTtQRN/u14S7Jds/iG	00f2544c-8780-41d8-b6c4-ad52bf3a52c4
5	Radostin	Popov	rado.hirurga	$2a$10$0abQZOAQoUNVAG6GN85osOZi4158epNmuvUDKo1.aVuiznbfx8y02	801f0a39-1e60-4685-8158-9fd43af3a476
\.


--
-- Data for Name: doctors_specialists; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctors_specialists (id, doctor_type) FROM stdin;
1	pediatrician
2	endocrinologist
3	neurologist
4	rheumatologist
5	allergist
6	psychiatrist
7	nephrologist
8	gynecologist
9	pulmonologist
10	surgeon
11	ophthalmologist
12	urologist
13	dermatologist
14	ENT
15	radiologist
16	gastroenterologist
17	cardiologist
18	orthopedist
\.


--
-- Data for Name: gender; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.gender (id, gender_type) FROM stdin;
1	male
2	female
\.


--
-- Data for Name: medical_referral; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.medical_referral (id, doctors_specialists_id, comment, unique_referral_number, date, doctor_id, patient_id) FROM stdin;
7	\N	Losho mu e	12123123	12.12.2020	4	\N
8	\N	Losho mu2	123123	12.12.2020	4	\N
9	\N	asdasd	123123	12.12.2020	4	29
\.


--
-- Data for Name: patient; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.patient (id, first_name, last_name, egn, address, phone, birth_date, age, gender_id, additional_info, doctor_id) FROM stdin;
19	Petya	Todorova	0087556288	"Ivan Asen II"	09764543567	12.11.1980	31	2	Excellent health	\N
20	Ivan	Ivanov	9912045738	"Studentski grad"	0897565643	15.11.1999	22	1	Blood type 0-	\N
21	Kalina	Angelova	8033452345	"Tsar Samuil" 11	0858483657	05.03.1980	41	2	Asthma	\N
22	Toni	Krumov	6528787134	"Pliska"7	0989653338	22.10.1965	56	1	Vaccinated for Covid 1st dose	\N
23	Yana	Lozanova	0912675614	"Liulin 3"	0867345676	23.05.2009	12	2	Short sight	\N
24	Tohomir	Petkov	1912432345	"Nadezhda 4"	0878564725	12.12.2019	2	1	Vaccinated for tetanus	\N
30	Radostin	Popov	004200001	Sofia	080000	12/12/2000	21	1		4
29	Teodor	Stanishev	0042086281	ul. "Gen.Kazimir Ernrot" 40	0882124358	12/12/2000	21	1	Golqm KUR	4
\.


--
-- Data for Name: prescription; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prescription (id, medicine, comment, date, unique_prescription_number, doctor_id, patient_id, results) FROM stdin;
8	Aspiring	Losho mu e	12.12.2020	123123123	4	\N	\N
9	Aspiring	Loshomu3	12.12.2020	123123123	4	\N	Oshte nishto
10	Aspiring	Loshomu3	12.12.2020	123123123	4	\N	Oshte nishto
11	Aspiring	Loshomu3	12.12.2020	123123123	4	29	Oshte nishto
\.


--
-- Name: doctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctor_id_seq', 5, true);


--
-- Name: doctors_specialists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctors_specialists_id_seq', 18, true);


--
-- Name: gender_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.gender_id_seq', 2, true);


--
-- Name: medical_referral_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.medical_referral_id_seq', 9, true);


--
-- Name: patient_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.patient_id_seq', 30, true);


--
-- Name: prescription_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.prescription_id_seq', 11, true);


--
-- Name: doctor doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);


--
-- Name: doctors_specialists doctors_specialists_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctors_specialists
    ADD CONSTRAINT doctors_specialists_pkey PRIMARY KEY (id);


--
-- Name: gender gender_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_pkey PRIMARY KEY (id);


--
-- Name: medical_referral medical_referral_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_referral
    ADD CONSTRAINT medical_referral_pkey PRIMARY KEY (id);


--
-- Name: patient patient_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_pkey PRIMARY KEY (id);


--
-- Name: prescription prescription_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT prescription_pkey PRIMARY KEY (id);


--
-- Name: medical_referral fk_medical_referral_doctor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_referral
    ADD CONSTRAINT fk_medical_referral_doctor FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) NOT VALID;


--
-- Name: medical_referral fk_medical_referral_doctors_specialists; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_referral
    ADD CONSTRAINT fk_medical_referral_doctors_specialists FOREIGN KEY (doctors_specialists_id) REFERENCES public.doctors_specialists(id) NOT VALID;


--
-- Name: medical_referral fk_medical_referral_patient; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medical_referral
    ADD CONSTRAINT fk_medical_referral_patient FOREIGN KEY (patient_id) REFERENCES public.patient(id) NOT VALID;


--
-- Name: patient fk_patient_doctor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patient
    ADD CONSTRAINT fk_patient_doctor FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) NOT VALID;


--
-- Name: patient fk_patient_gender; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.patient
    ADD CONSTRAINT fk_patient_gender FOREIGN KEY (gender_id) REFERENCES public.gender(id) NOT VALID;


--
-- Name: prescription fk_prescription_doctor; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT fk_prescription_doctor FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) NOT VALID;


--
-- Name: prescription fk_prescription_patient; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT fk_prescription_patient FOREIGN KEY (patient_id) REFERENCES public.patient(id) NOT VALID;


--
-- PostgreSQL database dump complete
--

