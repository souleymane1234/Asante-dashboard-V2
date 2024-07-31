"use client"
import React, {useEffect, useState} from 'react';
import { MdAnalytics, MdAttachMoney, MdDashboard, MdHelpCenter, MdLogout, MdPeople, MdSettings, MdShoppingBag, MdSupervisedUserCircle, MdWork } from "react-icons/md"
import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink"
import Image from 'next/image'
import Link from "next/link"


const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Tableau de bord",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Utilisateurs",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Medecins",
        path: "/dashboard/medecins",
        icon: <FaUserDoctor />
      },
      {
        title: "Infirmiers",
        path: "/dashboard/infirmiers",
        icon: <FaUserDoctor />
      },
      {
        title: "Hopitaux",
        path: "/dashboard/hopitaux",
        icon: <FaHospitalAlt />
      }
    ],
  },
  {
    title: "Analytiques",
    list: [
      {
        title: "Tablettes",
        path: "/dashboard/devices",
        icon: <IoPhonePortrait />
      },
      // {
      //   title: "Transactions",
      //   path: "/dashboard/revenue",
      //   icon: <MdWork />
      // },
      // {
      //   title: "Pourcentage",
      //   path: "/dashboard/reports",
      //   icon: <MdAnalytics />
      // },
      // {
      //   title: "Equipes",
      //   path: "/dashboard/teams",
      //   icon: <MdPeople />
      // }
    ]
  },
  {
    title: "Plus",
    list: [
      {
        title: "Parametres",
        path: "",
        icon: <MdSettings />
      },
      {
        title: "Aide",
        path: "",
        icon: <MdHelpCenter />
      }
    ]
  }
]
const Sidebar = () => {
  const [nom, setNom] = useState()
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log("okkkk ",searchParams.get('name'));
    setNom(searchParams.get('name'));
  }, []);
    return (
      <div className={styles.container}>
        <div className={styles.user}>
          <Image className={styles.userImage} src="/avatar.png" alt="" width="50" height="50"/>
          <div className={styles.userDetail}>
            <span className={[styles.userName]}>{nom}</span>
            <span className={styles.userTitle}>Administrateur</span>
          </div>
        </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>{cat.list.map((item) => (
              <MenuLink item={item} key={item.title}/>
            ))}

          </li>
        ))}
      </ul>
      <Link href="/">
      <button className={styles.logout}>
        <MdLogout />
        Deconnexion
      </button>
      </Link>
      </div>
    )
  }
  
  export default Sidebar