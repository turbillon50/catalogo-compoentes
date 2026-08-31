"use client";

import { motion } from "framer-motion";
import { ChatScreen } from "@/components/screens/ChatScreen";
import { GridScreen } from "@/components/screens/GridScreen";
import { ListScreen } from "@/components/screens/ListScreen";
import { DetailScreen } from "@/components/screens/DetailScreen";
import { ProfileScreen } from "@/components/screens/ProfileScreen";
import { MapScreen } from "@/components/screens/MapScreen";
import { DashboardScreen } from "@/components/screens/DashboardScreen";
import { PlayerScreen } from "@/components/screens/PlayerScreen";
import { CalendarScreen } from "@/components/screens/CalendarScreen";
import { FeedScreen } from "@/components/screens/FeedScreen";
import { LoginScreen } from "@/components/screens/LoginScreen";
import {
  chatDemo,
  gridDemo,
  listDemo,
  detailDemo,
  profileDemo,
  mapDemo,
  dashboardDemo,
  playerDemo,
  calendarDemo,
  feedDemo,
  loginDemo,
} from "@/lib/sample-data";

function Phone({ label, tipo, children }: { label: string; tipo: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-xs text-[var(--vfc-fg-muted)]">
        <span className="font-medium text-[var(--vfc-fg)]">{label}</span>{" "}
        <code className="rounded bg-[var(--vfc-surface-2)] px-1 py-0.5">tipo: &quot;{tipo}&quot;</code>
      </p>
      <div className="h-[560px] overflow-hidden rounded-vfc-lg border border-[var(--vfc-border)] bg-[var(--vfc-surface)] shadow-vfc">
        {children}
      </div>
    </div>
  );
}

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.24 } } };

export default function ScreensShowcase() {
  return (
    <motion.main variants={stagger} initial="hidden" animate="show" className="mx-auto max-w-5xl px-6 py-16">
      <motion.header variants={item} className="mb-12 max-w-2xl">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[var(--vfc-fg-muted)]">
          Kit de Pantallas · Protocolo Hornadas
        </p>
        <h1 className="text-3xl font-medium text-[var(--vfc-fg)]">
          Los 11 patrones que se repiten en las 16 plantillas de negocio
        </h1>
        <p className="mt-2 text-[var(--vfc-fg-muted)]">
          Cada pantalla recibe el mismo <code>datos</code> que ya trae plantillas.js — sin transformar
          nada. Los datos de abajo son copia literal de ese archivo.
        </p>
      </motion.header>

      <motion.div variants={stagger} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <motion.div variants={item}>
          <Phone label="ChatScreen" tipo="chat">
            <ChatScreen {...chatDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="GridScreen" tipo="grid">
            <GridScreen {...gridDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="ListScreen" tipo="list">
            <ListScreen {...listDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="DetailScreen" tipo="detail">
            <DetailScreen {...detailDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="ProfileScreen" tipo="profile">
            <ProfileScreen {...profileDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="MapScreen" tipo="map">
            <MapScreen {...mapDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="DashboardScreen" tipo="dashboard">
            <DashboardScreen {...dashboardDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="PlayerScreen" tipo="player">
            <PlayerScreen {...playerDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="CalendarScreen" tipo="calendar">
            <CalendarScreen {...calendarDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="FeedScreen" tipo="feed">
            <FeedScreen {...feedDemo} />
          </Phone>
        </motion.div>
        <motion.div variants={item}>
          <Phone label="LoginScreen" tipo="login">
            <LoginScreen {...loginDemo} />
          </Phone>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
