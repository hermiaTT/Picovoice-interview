void matrix_vector_multiplication(
    const int8_t*matrix,
    int32_t num_rows,
    int32_t num_colums,
    const int16_t*input,
    int16_t*output,
    
    int i, j;
    for(i = 0;i< num_rows ;i++){
        output[i]=0;
        for(j = 0; j< num_colums;j++){
            output[i] += matrix[i][j]*input[j];
        }
    }
);