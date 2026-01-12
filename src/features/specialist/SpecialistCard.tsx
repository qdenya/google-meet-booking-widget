import React from 'react';
import type { SpecialistInfo } from '../../types';
import styles from './SpecialistCard.module.css';
import clockIcon from '../../assets/сlock.svg';
import checkIcon from '../../assets/сheck.svg';
import meetIcon from '../../assets/meet-icon.png';

interface SpecialistCardProps {
  specialist?: SpecialistInfo;
}

export const SpecialistCard: React.FC<SpecialistCardProps> = ({ specialist }) => {
  const defaultSpecialist: SpecialistInfo = {
    name: 'Специалист',
    description: 'Консультация по бронированию встреч',
    photo: undefined,
    meetSubject: 'Онлайн консультация',
    meetDescription: 'Google Meet',
    infoLabels: {
      timeSlot: 'Время созвона',
      confirmation: 'Обязательно подтверждение',
      videoCall: 'Google Meet Video'
    }
  };

  const info = specialist || defaultSpecialist;
  const labels = {
    timeSlot: info.infoLabels?.timeSlot || defaultSpecialist.infoLabels!.timeSlot,
    confirmation: info.infoLabels?.confirmation || defaultSpecialist.infoLabels!.confirmation,
    videoCall: info.infoLabels?.videoCall || defaultSpecialist.infoLabels!.videoCall
  };

  return (
    <div className={styles.card}>
      <div className={styles.photoContainer}>
        {info.photo ? (
          <img src={info.photo} alt={info.name} className={styles.photo} />
        ) : (
          <div className={styles.photoPlaceholder}>
            <span className={styles.initials}>
              {info.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2)}
            </span>
          </div>
        )}
      </div>

      <h2 className={styles.name}>{info.name}</h2>

      {info.description && (
        <p className={styles.description}>{info.description}</p>
      )}

      {info.email && (
        <a href={`mailto:${info.email}`} className={styles.email}>
          {info.email}
        </a>
      )}

      {
        (info.meetSubject || info.meetDescription) && (
          <div className={styles.meetInfo}>
            {info.meetSubject && (
              <span className={styles.meetSubject}>{info.meetSubject}</span>
            )}
            {info.meetDescription && (
              <span className={styles.meetDescription}>{info.meetDescription}</span>
            )}
          </div>
        )
      }

      <div className={styles.divider}></div>

      <div className={styles.info}>
        <div className={styles.infoItem}>
          <img src={clockIcon} alt="Clock" className={styles.icon} />
          <span className={styles.infoText}>{labels.timeSlot}</span>
        </div>
        <div className={styles.infoItem}>
          <img src={checkIcon} alt="Check" className={styles.icon} />
          <span className={styles.infoText}>{labels.confirmation}</span>
        </div>
        <div className={styles.infoItem}>
          <img src={meetIcon} alt="Google Meet" className={styles.icon} />
          <span className={styles.infoText}>{labels.videoCall}</span>
        </div>
      </div>
    </div>
  );
};
