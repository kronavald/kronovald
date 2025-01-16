import { Test, TestingModule } from "@nestjs/testing"
import { TextDocumentsController } from "./text-documents.controller"
import { TextDocumentsService } from "./text-documents.service"

describe("TextDocumentsController", () => {
    let controller: TextDocumentsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TextDocumentsController],
            providers: [TextDocumentsService],
        }).compile()

        controller = module.get<TextDocumentsController>(TextDocumentsController)
    })

    it("should be defined", () => {
        expect(controller).toBeDefined()
    })
})
