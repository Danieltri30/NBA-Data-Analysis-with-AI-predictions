import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Input

# Load and process data
df = pd.read_csv("NBA_Team_Performance.csv")
df['win_rate'] = df['wins'] / df['games_played']
df['label'] = (df['win_rate'] >= 0.5).astype(int)

# Features and target
features = ['TEAM_HOME', 'games_played', 'total_points_scored', 'total_points_allowed', 'avg_points_scored', 'avg_points_allowed']
X = df[features].values
y = df['label'].values

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Build and compile the model
model = Sequential([
    Input(shape=(X_train.shape[1],)),
    Dense(16, activation='relu'),
    Dense(8, activation='relu'),
    Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

print("Training the model...")
model.fit(X_train, y_train, epochs=50, batch_size=8, validation_data=(X_test, y_test))

# Evaluate model
loss, accuracy = model.evaluate(X_test, y_test)
print(f"\nTest Loss: {loss:.4f}, Test Accuracy: {accuracy:.4f}")

# Predictions on test set
y_pred_prob = model.predict(X_test)
y_pred = (y_pred_prob >= 0.5).astype(int)

# Display sample predictions
print("\nSample Test Case Predictions:")
for i in range(5):
    print("Input Features:", X_test[i])
    print("Predicted Probability: {:.2f}".format(y_pred_prob[i][0]))
    print("Predicted Label:", y_pred[i][0], "- True Label:", y_test[i])
    print("---")

print("\nOverall Test Accuracy:", accuracy_score(y_test, y_pred))
print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))
print("\nClassification Report:")
print(classification_report(y_test, y_pred))
