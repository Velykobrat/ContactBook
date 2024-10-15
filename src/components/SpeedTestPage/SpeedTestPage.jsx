import React, { useState } from 'react';
import styles from './SpeedTestPage.module.css';

const SpeedTestPage = () => {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const fetchIp = async () => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIp(data.ip);
    } catch (error) {
      console.error('Error fetching IP:', error);
      setErrorMessage('Не вдалося отримати IP. Спробуйте ще раз.');
    }
  };

  const fetchSpeed = () => {
    const image = new Image();
    const startTime = new Date().getTime();
    const randomNumber = Math.floor(Math.random() * 1000); // Генеруємо випадковий номер для унікальності
    image.src = `https://via.placeholder.com/1000x1000?text=SpeedTest&${randomNumber}`;
    
    // Додаємо обробники для `onload` та `onerror`
    image.onload = () => {
      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000; // Время в секундах
      const speed = (1000 * 1000 * 8) / duration; // Перетворюємо в біт за секунду
      setDownloadSpeed(speed / 1000000); // Мбіт/с
    };

    image.onerror = (error) => {
      console.error('Error fetching speed:', error);
      setErrorMessage('Помилка під час тестування швидкості. Спробуйте ще раз.');
    };
  };

  const handleTest = async () => {
    setLoading(true);
    setErrorMessage('');
    await fetchIp(); // Отримуємо IP
    fetchSpeed(); // Тест швидкості
    setLoading(false);
  };

  return (
    <div className={styles.speedTestContainer}>
      <h1>Speed Test</h1>
      <p>Тут ви можете перевірити швидкість вашого інтернет-з'єднання.</p>
      <button onClick={handleTest} disabled={loading}>
        {loading ? 'Тестування...' : 'Почати тест'}
      </button>
      {ip && <p>Ваш IP: {ip}</p>}
      {downloadSpeed !== null && (
        <p>Ваша швидкість завантаження: {downloadSpeed.toFixed(2)} Мбіт/с</p>
      )}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};

export default SpeedTestPage;
