import { useState } from "react";
import { Card, Modal } from "antd";
import { User } from "../../utils/types";
import { InfoCircleOutlined } from "@ant-design/icons";

import styles from "./UserCard.module.scss";

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Card className={styles.userCard} title={user.username} bordered>
      <InfoCircleOutlined
        className={styles.icon}
        onClick={() => setIsModalOpen(true)}
        color="#2d72d2"
      />
      <div className={styles.row}>
        <div className={styles.section}>
          <span className={styles.title}>Почта</span>
          <span>{user.email}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Телефон</span>
          <span>{user.phone}</span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.section}>
          <span className={styles.title}>Имя</span>
          <span>{user.name.firstname}</span>
        </div>
        <div className={styles.section}>
          <span className={styles.title}>Фамилия</span>
          <span>{user.name.lastname}</span>
        </div>
      </div>

      {/* Здесь уже немного торопился */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => setIsModalOpen(false)}
        centered
      >
        <div className={styles.modalContent}>
          <div>
            <span className={styles.modalTitle}>Город</span>:{" "}
            <span>{user.address.city}</span>
          </div>
          <div>
            <span className={styles.modalTitle}>Улица</span>:{" "}
            <span>{user.address.street}</span>
          </div>
          <div>
            <span className={styles.modalTitle}>Широта</span>:{" "}
            <span>{user.address.geolocation.lat}</span>
          </div>
          <div>
            <span className={styles.modalTitle}>Долгота</span>:{" "}
            <span>{user.address.geolocation.long}</span>
          </div>
        </div>
      </Modal>
    </Card>
  );
};
