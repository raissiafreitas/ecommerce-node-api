interface IUseCase<inputDTO, OutputDTO> {
    execute (input?: inputDTO): Promise<OutputDTO>;
}

export { IUseCase }
