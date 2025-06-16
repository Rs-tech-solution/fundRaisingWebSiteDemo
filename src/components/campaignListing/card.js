// components/ProductCard.js
import { FaFacebook, FaShareAlt } from 'react-icons/fa';
import styles from './style.module.scss';
import { useRouter } from 'next/navigation';
export default function CampaignCard({ campaign }) {
    const router = useRouter();
    return (
        <div className={styles.card} onClick={() => router.push(`/campaignDetail/${campaign.code}`)}>
            {true && <div className={styles.taxBenefit}>Tax Benefit</div>}
            <img src={campaign.imageSrc} alt={campaign?.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>{campaign.title}</h2>
                <div className={styles.details}>
                    <span className={styles.raised}>{campaign?.raised} Raised</span>
                    <span className={styles.backers}>{campaign?.backers} Backers</span>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progress} style={{ width: '13%' }}></div>
                </div>
                <div className={styles.author}>By {campaign?.author}</div>
                <div className={styles.actions}>
                    <button className={styles.shareButton}><FaFacebook size={18} style={{ color: '#1877F2' }} /> Share</button>
                    <button className={styles.donateButton}>Donate Now</button>
                </div>
            </div>
        </div>
    );
}
