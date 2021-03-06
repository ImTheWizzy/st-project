PGDMP         6                y            medicalRecords    12.4    12.4 3    F           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            G           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            H           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            I           1262    16645    medicalRecords    DATABASE     ?   CREATE DATABASE "medicalRecords" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
     DROP DATABASE "medicalRecords";
                postgres    false            ?            1259    16646    doctor    TABLE     ?   CREATE TABLE public.doctor (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    username character varying,
    password character varying,
    unique_doctor_number character varying
);
    DROP TABLE public.doctor;
       public         heap    postgres    false            ?            1259    16652    doctor_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.doctor_id_seq;
       public          postgres    false    202            J           0    0    doctor_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;
          public          postgres    false    203            ?            1259    16654    doctors_specialists    TABLE     h   CREATE TABLE public.doctors_specialists (
    id integer NOT NULL,
    doctor_type character varying
);
 '   DROP TABLE public.doctors_specialists;
       public         heap    postgres    false            ?            1259    16660    doctors_specialists_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.doctors_specialists_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.doctors_specialists_id_seq;
       public          postgres    false    204            K           0    0    doctors_specialists_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.doctors_specialists_id_seq OWNED BY public.doctors_specialists.id;
          public          postgres    false    205            ?            1259    16662    gender    TABLE     [   CREATE TABLE public.gender (
    id integer NOT NULL,
    gender_type character varying
);
    DROP TABLE public.gender;
       public         heap    postgres    false            ?            1259    16668    gender_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.gender_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.gender_id_seq;
       public          postgres    false    206            L           0    0    gender_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.gender_id_seq OWNED BY public.gender.id;
          public          postgres    false    207            ?            1259    16670    medical_referral    TABLE     D  CREATE TABLE public.medical_referral (
    id integer NOT NULL,
    doctors_specialists_id integer,
    comment character varying,
    unique_referral_number character varying,
    date character varying,
    doctor_id integer,
    first_name character varying,
    last_name character varying,
    egn character varying
);
 $   DROP TABLE public.medical_referral;
       public         heap    postgres    false            ?            1259    16676    medical_referral_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.medical_referral_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.medical_referral_id_seq;
       public          postgres    false    208            M           0    0    medical_referral_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.medical_referral_id_seq OWNED BY public.medical_referral.id;
          public          postgres    false    209            ?            1259    16678    patient    TABLE     [  CREATE TABLE public.patient (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    egn character varying,
    address character varying,
    phone character varying,
    birth_date character varying,
    age integer,
    gender_id integer,
    additional_info character varying,
    doctor_id integer
);
    DROP TABLE public.patient;
       public         heap    postgres    false            ?            1259    16684    patient_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.patient_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.patient_id_seq;
       public          postgres    false    210            N           0    0    patient_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.patient_id_seq OWNED BY public.patient.id;
          public          postgres    false    211            ?            1259    16686    prescription    TABLE     %  CREATE TABLE public.prescription (
    id integer NOT NULL,
    medicine character varying,
    comment character varying,
    date character varying,
    unique_prescription_number character varying,
    doctor_id integer,
    first_name character varying,
    last_name character varying
);
     DROP TABLE public.prescription;
       public         heap    postgres    false            ?            1259    16692    prescription_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.prescription_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.prescription_id_seq;
       public          postgres    false    212            O           0    0    prescription_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.prescription_id_seq OWNED BY public.prescription.id;
          public          postgres    false    213            ?
           2604    16694 	   doctor id    DEFAULT     f   ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);
 8   ALTER TABLE public.doctor ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    203    202            ?
           2604    16695    doctors_specialists id    DEFAULT     ?   ALTER TABLE ONLY public.doctors_specialists ALTER COLUMN id SET DEFAULT nextval('public.doctors_specialists_id_seq'::regclass);
 E   ALTER TABLE public.doctors_specialists ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204            ?
           2604    16696 	   gender id    DEFAULT     f   ALTER TABLE ONLY public.gender ALTER COLUMN id SET DEFAULT nextval('public.gender_id_seq'::regclass);
 8   ALTER TABLE public.gender ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206            ?
           2604    16697    medical_referral id    DEFAULT     z   ALTER TABLE ONLY public.medical_referral ALTER COLUMN id SET DEFAULT nextval('public.medical_referral_id_seq'::regclass);
 B   ALTER TABLE public.medical_referral ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208            ?
           2604    16698 
   patient id    DEFAULT     h   ALTER TABLE ONLY public.patient ALTER COLUMN id SET DEFAULT nextval('public.patient_id_seq'::regclass);
 9   ALTER TABLE public.patient ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210            ?
           2604    16699    prescription id    DEFAULT     r   ALTER TABLE ONLY public.prescription ALTER COLUMN id SET DEFAULT nextval('public.prescription_id_seq'::regclass);
 >   ALTER TABLE public.prescription ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212            8          0    16646    doctor 
   TABLE DATA           e   COPY public.doctor (id, first_name, last_name, username, password, unique_doctor_number) FROM stdin;
    public          postgres    false    202   <       :          0    16654    doctors_specialists 
   TABLE DATA           >   COPY public.doctors_specialists (id, doctor_type) FROM stdin;
    public          postgres    false    204   ?<       <          0    16662    gender 
   TABLE DATA           1   COPY public.gender (id, gender_type) FROM stdin;
    public          postgres    false    206   l=       >          0    16670    medical_referral 
   TABLE DATA           ?   COPY public.medical_referral (id, doctors_specialists_id, comment, unique_referral_number, date, doctor_id, first_name, last_name, egn) FROM stdin;
    public          postgres    false    208   ?=       @          0    16678    patient 
   TABLE DATA           ?   COPY public.patient (id, first_name, last_name, egn, address, phone, birth_date, age, gender_id, additional_info, doctor_id) FROM stdin;
    public          postgres    false    210   ?=       B          0    16686    prescription 
   TABLE DATA           ?   COPY public.prescription (id, medicine, comment, date, unique_prescription_number, doctor_id, first_name, last_name) FROM stdin;
    public          postgres    false    212   8?       P           0    0    doctor_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.doctor_id_seq', 3, true);
          public          postgres    false    203            Q           0    0    doctors_specialists_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.doctors_specialists_id_seq', 18, true);
          public          postgres    false    205            R           0    0    gender_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.gender_id_seq', 2, true);
          public          postgres    false    207            S           0    0    medical_referral_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.medical_referral_id_seq', 6, true);
          public          postgres    false    209            T           0    0    patient_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.patient_id_seq', 24, true);
          public          postgres    false    211            U           0    0    prescription_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.prescription_id_seq', 7, true);
          public          postgres    false    213            ?
           2606    16701    doctor doctor_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.doctor DROP CONSTRAINT doctor_pkey;
       public            postgres    false    202            ?
           2606    16703 ,   doctors_specialists doctors_specialists_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.doctors_specialists
    ADD CONSTRAINT doctors_specialists_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.doctors_specialists DROP CONSTRAINT doctors_specialists_pkey;
       public            postgres    false    204            ?
           2606    16705    gender gender_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.gender
    ADD CONSTRAINT gender_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.gender DROP CONSTRAINT gender_pkey;
       public            postgres    false    206            ?
           2606    16707 &   medical_referral medical_referral_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.medical_referral
    ADD CONSTRAINT medical_referral_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.medical_referral DROP CONSTRAINT medical_referral_pkey;
       public            postgres    false    208            ?
           2606    16709    patient patient_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT patient_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.patient DROP CONSTRAINT patient_pkey;
       public            postgres    false    210            ?
           2606    16711    prescription prescription_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT prescription_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.prescription DROP CONSTRAINT prescription_pkey;
       public            postgres    false    212            ?
           2606    16712 +   medical_referral fk_medical_referral_doctor    FK CONSTRAINT     ?   ALTER TABLE ONLY public.medical_referral
    ADD CONSTRAINT fk_medical_referral_doctor FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) NOT VALID;
 U   ALTER TABLE ONLY public.medical_referral DROP CONSTRAINT fk_medical_referral_doctor;
       public          postgres    false    202    2730    208            ?
           2606    16717 8   medical_referral fk_medical_referral_doctors_specialists    FK CONSTRAINT     ?   ALTER TABLE ONLY public.medical_referral
    ADD CONSTRAINT fk_medical_referral_doctors_specialists FOREIGN KEY (doctors_specialists_id) REFERENCES public.doctors_specialists(id) NOT VALID;
 b   ALTER TABLE ONLY public.medical_referral DROP CONSTRAINT fk_medical_referral_doctors_specialists;
       public          postgres    false    208    2732    204            ?
           2606    16727    patient fk_patient_doctor    FK CONSTRAINT     ?   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT fk_patient_doctor FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) NOT VALID;
 C   ALTER TABLE ONLY public.patient DROP CONSTRAINT fk_patient_doctor;
       public          postgres    false    202    210    2730            ?
           2606    16732    patient fk_patient_gender    FK CONSTRAINT     ?   ALTER TABLE ONLY public.patient
    ADD CONSTRAINT fk_patient_gender FOREIGN KEY (gender_id) REFERENCES public.gender(id) NOT VALID;
 C   ALTER TABLE ONLY public.patient DROP CONSTRAINT fk_patient_gender;
       public          postgres    false    210    2734    206            ?
           2606    16737 #   prescription fk_prescription_doctor    FK CONSTRAINT     ?   ALTER TABLE ONLY public.prescription
    ADD CONSTRAINT fk_prescription_doctor FOREIGN KEY (doctor_id) REFERENCES public.doctor(id) NOT VALID;
 M   ALTER TABLE ONLY public.prescription DROP CONSTRAINT fk_prescription_doctor;
       public          postgres    false    212    202    2730            8   ?   x?3??0?b?ņ8/̿??b??]?]???p?%??X8????9;e??????e????Z?????e??Tz?饘zYd;?EX??s??'???'뚘'Ꚙ$??&?ZX??$Y????Y?&?r??qqq U?.?      :   ?   x?M??? ???a????еS?.?X?`dȐ?o)?????>Y#??Mo???Ł??ȁG??z ?,;?G?d??h`B ??)/?m?V?Vgr??ǸD?;>??0?qGߑg????\qf?w??B?0?\B???G?bt[?&a??Nsk?2Ճ?8??a??M)?5_?      <      x?3??M?I?2?LK3b???? >?;      >      x?????? ? ?      @   v  x?e??j?0F?7O!???-?2??R
)?nD??"?5Xr?????Yva???????Ծ??X?r???Z?t?[?ؾ??po??JjcE?أw$????Ni??ؐ???x?	+`{?x??+m%??m??q?dv?C$??Vm??w??  <??D־?&?m\??0?)?~:?q?v\J?=н?0?c?.y?"??SNm???˻?Z???װ1?2<?˕\??:?RA?:?z	???-%4??hІ??Ӊ?Z???????rdX????/?=??s?^cPf?ah2???Bs?\3K#?5 dO??sO???8?????Cۀ???r??z?rF"*yo?b?b`jeZGa??ۭ	b"??i?R?RW?G????????      B      x?????? ? ?     