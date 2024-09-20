interface IDatabaseDetails {
  displayName: string;
  databaseName: string;
  host: string;
  port: number | string;
  username: string;
  password: string;
}

interface ITestResult {
  success: boolean;
  message?: string;
}

export const testDatabaseConnection = async (
  dbDetails: IDatabaseDetails
): Promise<ITestResult | null> => {
  try {
    const response = await fetch('http://192.168.11.174:5000/set_db_settings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dbDetails),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ITestResult = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to test database connection:', error);
    return null;
  }
};
